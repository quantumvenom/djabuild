import { randomBytes, scryptSync } from "crypto";

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(storedPassword: string, suppliedPassword: string): boolean {
  const [salt, hash] = storedPassword.split(":");
  const suppliedHash = scryptSync(suppliedPassword, salt, 64).toString("hex");
  return hash === suppliedHash;
}
