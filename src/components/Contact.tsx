import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { siteContact } from "@/lib/siteContent";

const Contact = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-slate-500 mb-12">
              Have a project in mind or want to learn more about our training?
              Our team of engineers is ready to help you innovate.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-sky-50 dark:bg-sky-500/10 text-sky-500">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Us</h4>
                  <a
                    href={`mailto:${siteContact.email}`}
                    className="text-slate-500 transition-colors hover:text-sky-600 dark:hover:text-sky-400"
                  >
                    {siteContact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-sky-50 dark:bg-sky-500/10 text-sky-500">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Call Us</h4>
                  {siteContact.phones.map((entry) => (
                    <div key={entry.region} className="mt-3 first:mt-0">
                      <h3 className="font-bold text-lg">{entry.region}</h3>
                      {entry.numbers.map((phone) => (
                        <p key={phone} className="text-slate-500">
                          {phone}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-sky-50 dark:bg-sky-500/10 text-sky-500">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Visit Us</h4>
                  <p className="text-slate-500">{siteContact.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    placeholder="John Doe"
                    required
                    className="bg-white dark:bg-slate-950"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-white dark:bg-slate-950"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="How can we help you?"
                  className="min-h-[150px] bg-white dark:bg-slate-950"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-sky-600 hover:bg-sky-500 text-white rounded-xl py-6 font-bold text-lg"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
