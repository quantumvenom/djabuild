import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { storage } from "./storage";
import type { Admin } from "@shared/schema";
import type { Request, Response, NextFunction } from "express";

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const admin = await storage.verifyAdminCredentials(email, password);
        if (!admin) {
          return done(null, false, { message: "Invalid credentials" });
        }
        return done(null, admin);
      } catch (error) {
        return done(error);
      }
    },
  ),
);

passport.serializeUser((user: Admin, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
  try {
    const admin = Array.from(storage.admins.values()).find(
      (admin) => admin.id === id,
    );
    done(null, admin);
  } catch (error) {
    done(error);
  }
});

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized" });
}

export { passport };
