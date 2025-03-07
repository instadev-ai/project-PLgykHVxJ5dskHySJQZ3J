
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>
        
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;
