import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  businessName: z.string().min(2, "Business name is required."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(8, "Valid phone number is required."),
  service: z.string({ required_error: "Please select a service." }),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      businessName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    const text = `Name: ${values.name}
Business: ${values.businessName}
Email: ${values.email}
Phone: ${values.phone}
Service: ${values.service}
Message: ${values.message}`;

    const url = `https://wa.me/201503770943?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-foreground"
          >
            Let's Grow Your Business Together
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Ready to scale your brand? Reach out to us directly or fill out the form below.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-secondary relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Info Cards */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 space-y-4"
            >
              {[
                { icon: MessageCircle, label: "WhatsApp", value: "+20 150 377 0943" },
                { icon: Mail, label: "Email", value: "a7medmelgamel@gmail.com" },
                { icon: MapPin, label: "Location", value: "Egypt" },
                { icon: Clock, label: "Response Time", value: "Within 24 Hours" }
              ].map((info, i) => (
                <div key={i} className="flex items-center gap-4 bg-card border border-border p-6 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">{info.label}</p>
                    <p className="text-foreground font-bold">{info.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <div className="bg-card border border-border p-8 md:p-10 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-8 text-foreground">Send Us An Inquiry</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="bg-background border-border focus-visible:ring-primary h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Business Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Acme Corp" className="bg-background border-border focus-visible:ring-primary h-12" {...field} />
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
                            <FormLabel className="text-foreground">Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" className="bg-background border-border focus-visible:ring-primary h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Phone Number</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+1 (555) 000-0000" className="bg-background border-border focus-visible:ring-primary h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Service Needed</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background border-border focus:ring-primary h-12">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-card border-border">
                              <SelectItem value="Meta Ads">Meta Ads</SelectItem>
                              <SelectItem value="Creative Design">Creative Design</SelectItem>
                              <SelectItem value="Video Editing">Video Editing</SelectItem>
                              <SelectItem value="Ad Account Setup">Ad Account Setup</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your goals..." 
                              className="bg-background border-border focus-visible:ring-primary min-h-[120px] resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold mt-4">
                      Send Inquiry
                    </Button>
                  </form>
                </Form>

              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}