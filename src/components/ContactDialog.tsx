import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Phone, Send, Linkedin, Mail } from "lucide-react";

interface ContactDialogProps {
  trigger: React.ReactNode;
}

const ContactDialog = ({ trigger }: ContactDialogProps) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:saurabhanandseo@gmail.com?subject=${subject}&body=${body}`;
    setForm({ name: "", email: "", message: "" });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-lg glass-card">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Get in touch</DialogTitle>
        </DialogHeader>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> New Delhi, India</div>
          <div className="flex items-center gap-2"><Phone size={16} className="text-primary" /> +91 7667926418</div>
          <a href="mailto:saurabhanandseo@gmail.com" className="flex items-center gap-2 hover:text-foreground"><Mail size={16} className="text-primary" /> saurabhanandseo@gmail.com</a>
          <a href="https://www.linkedin.com/in/saurabhanandseo/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground"><Linkedin size={16} className="text-primary" /> LinkedIn</a>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3 pt-2">
          <input type="text" placeholder="Name" required value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
          <input type="email" placeholder="Email" required value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
          <textarea placeholder="Message" rows={3} required value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
          <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90">
            Send Message <Send size={14} />
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
