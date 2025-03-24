import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

type ContactFormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest('POST', '/api/contact', data);
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block mb-2 font-semibold">Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your name" 
                  className="w-full px-4 py-2 bg-[#14213D] bg-opacity-50 border border-[#E5E5E5] rounded focus:outline-none focus:border-[#FCA311] text-white" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block mb-2 font-semibold">Email</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your email" 
                  type="email"
                  className="w-full px-4 py-2 bg-[#14213D] bg-opacity-50 border border-[#E5E5E5] rounded focus:outline-none focus:border-[#FCA311] text-white" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block mb-2 font-semibold">Subject</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Subject" 
                  className="w-full px-4 py-2 bg-[#14213D] bg-opacity-50 border border-[#E5E5E5] rounded focus:outline-none focus:border-[#FCA311] text-white" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block mb-2 font-semibold">Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Your message" 
                  rows={5}
                  className="w-full px-4 py-2 bg-[#14213D] bg-opacity-50 border border-[#E5E5E5] rounded focus:outline-none focus:border-[#FCA311] text-white resize-none" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-[#FCA311] text-[#14213D] font-semibold px-6 py-3 rounded shadow hover:bg-opacity-90 transition-all duration-300 w-full sm:w-auto"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
