import { 
  type Contact, 
  type InsertContact,
  type Project,
  type InsertProject,
  type Admin,
  type InsertAdmin
} from "@shared/schema";
import { hashPassword, verifyPassword } from "./utils/auth";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  getProjects(): Promise<Project[]>;
  getProjectById(id: number): Promise<Project | undefined>;
  createAdmin(admin: InsertAdmin): Promise<Admin>;
  getAdminByEmail(email: string): Promise<Admin | undefined>;
  verifyAdminCredentials(email: string, password: string): Promise<Admin | null>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private projects: Map<number, Project>;
  private admins: Map<number, Admin>;
  private contactId: number;
  private projectId: number;
  private adminId: number;

  constructor() {
    this.contacts = new Map();
    this.projects = new Map();
    this.admins = new Map();
    this.contactId = 1;
    this.projectId = 1;
    this.adminId = 1;

    // Seed projects data
    const projectsData: InsertProject[] = [
      {
        title: "Modern Office Complex",
        description: "A state-of-the-art office building with sustainable features",
        imageUrl: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e",
        category: "Commercial"
      },
      {
        title: "Luxury Residential Tower",
        description: "High-end residential complex with premium amenities",
        imageUrl: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77",
        category: "Residential"
      },
      {
        title: "Industrial Warehouse",
        description: "Large-scale warehouse with modern logistics facilities",
        imageUrl: "https://images.unsplash.com/photo-1531431057391-da7a1aabd412",
        category: "Industrial"
      }
    ];

    // Create default admin account
    this.createAdmin({
      email: "admin@djaconstruction.com",
      password: "admin123"  // This is just for development, should be changed in production
    });

    projectsData.forEach(project => this.createProject(project));
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const newContact: Contact = { 
      ...contact, 
      id, 
      isRead: false,
      phone: contact.phone || null 
    };
    this.contacts.set(id, newContact);
    return newContact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  private createProject(project: InsertProject): Project {
    const id = this.projectId++;
    const newProject: Project = { ...project, id };
    this.projects.set(id, newProject);
    return newProject;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProjectById(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createAdmin(admin: InsertAdmin): Promise<Admin> {
    const id = this.adminId++;
    const hashedPassword = hashPassword(admin.password);
    const newAdmin: Admin = {
      ...admin,
      id,
      password: hashedPassword,
      createdAt: new Date()
    };
    this.admins.set(id, newAdmin);
    return newAdmin;
  }

  async getAdminByEmail(email: string): Promise<Admin | undefined> {
    return Array.from(this.admins.values()).find(admin => admin.email === email);
  }

  async verifyAdminCredentials(email: string, password: string): Promise<Admin | null> {
    const admin = await this.getAdminByEmail(email);
    if (!admin || !verifyPassword(admin.password, password)) {
      return null;
    }
    return admin;
  }
}

export const storage = new MemStorage();