import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const contactData = insertContactMessageSchema.parse(req.body);
      
      // Save the contact message
      const savedMessage = await storage.createContactMessage(contactData);
      
      return res.status(201).json({
        message: "Contact message received successfully",
        data: savedMessage
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          message: "Validation error",
          errors: validationError.message
        });
      }
      
      return res.status(500).json({
        message: "An error occurred while processing your request"
      });
    }
  });

  // Get all contact messages (could be used for an admin panel)
  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      return res.status(200).json(messages);
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred while retrieving contact messages"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
