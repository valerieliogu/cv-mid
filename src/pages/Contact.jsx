import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = () => {
    toast({
      title: "Berhasil!",
      description: "Pesan kamu sudah terkirim.",
    });
  };

  return (
    <button
      onClick={handleSubmit}
      className="bg-blue-600 text-white px-4 py-2 rounded-md"
    >
      Test Toast
    </button>
  );
};

export default Contact;
