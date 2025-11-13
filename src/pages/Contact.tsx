import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nama tidak boleh kosong").max(100, "Nama maksimal 100 karakter"),
  email: z.string().trim().email("Email tidak valid").max(255, "Email maksimal 255 karakter"),
  message: z.string().trim().min(1, "Pesan tidak boleh kosong").max(1000, "Pesan maksimal 1000 karakter")
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      // Validate form
      const validatedData = contactSchema.parse(form);

      // Simulate sending to server (in production, you would use Lovable Cloud)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Store in localStorage as a simple alternative to JSON Server
      const messages = JSON.parse(localStorage.getItem("contact_messages") || "[]");
      messages.push({
        ...validatedData,
        id: Date.now().toString(),
        timestamp: new Date().toISOString()
      });
      localStorage.setItem("contact_messages", JSON.stringify(messages));

      toast({
        title: "Pesan Berhasil Dikirim! ✨",
        description: "Terima kasih telah menghubungi saya. Saya akan segera merespons pesan Anda.",
      });

      // Reset form
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { [key: string]: string } = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
        
        toast({
          title: "Validasi Gagal",
          description: "Mohon periksa kembali form Anda.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="space-y-8 animate-in fade-in duration-700">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground glow-text">
              Get In Touch
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground">
              Tertarik untuk bekerja sama? Hubungi saya melalui form di bawah ini
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Nama Lengkap <span className="text-destructive">*</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Masukkan nama Anda"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`bg-background border-border focus:border-primary ${
                    errors.name ? "border-destructive" : ""
                  }`}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nama@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`bg-background border-border focus:border-primary ${
                    errors.email ? "border-destructive" : ""
                  }`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Pesan <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  placeholder="Ceritakan tentang proyek atau kolaborasi yang Anda inginkan..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`bg-background border-border focus:border-primary min-h-[150px] ${
                    errors.message ? "border-destructive" : ""
                  }`}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-border smooth-transition group"
              >
                {isSubmitting ? (
                  "Mengirim..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Kirim Pesan
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="text-center text-sm text-muted-foreground">
            <p>Atau hubungi saya langsung melalui email:</p>
            <a 
              href="mailto:valerie.liogu@example.com" 
              className="text-primary hover:underline font-medium"
            >
              valerie.liogu@example.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
