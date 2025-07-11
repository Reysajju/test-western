import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <main>
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-6">
                  Have questions about our services? Need a quote for your project? 
                  We&apos;re here to help. Contact us using the form below or through 
                  any of our communication channels.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">info@westernmedicalwriter.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM PST</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">FAQ</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">How quickly can you complete my project?</h3>
                    <p className="text-gray-600">
                      Turnaround time varies depending on the project scope. We&apos;ll provide a 
                      detailed timeline during our initial consultation.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Do you offer rush services?</h3>
                    <p className="text-gray-600">
                      Yes, we offer expedited services for urgent projects at an additional fee.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">What are your payment terms?</h3>
                    <p className="text-gray-600">
                      We typically require a 50% deposit to begin work, with the balance due upon completion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm 
        title="Send Us a Message"
        subtitle="Fill out the form below and we'll get back to you within 24 hours."
      />
    </main>
  );
}
