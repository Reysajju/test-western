import ContactForm from '@/components/ContactForm';

export default function About() {
  return (
    <main>
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-600 mb-6">
                Western Medical Writer is a leading provider of medical writing and editing services. 
                We specialize in helping healthcare professionals, researchers, and organizations 
                communicate their work effectively through high-quality medical content.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team consists of experienced medical writers and editors with diverse backgrounds 
                in medicine, scientific research, and healthcare communications. This breadth of 
                expertise allows us to handle a wide range of projects while maintaining the highest 
                standards of quality.
              </p>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide exceptional medical writing and editing services that help advance 
                healthcare communication and scientific research, while maintaining the highest 
                standards of accuracy, clarity, and professionalism.
              </p>
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <ul className="list-disc list-inside text-lg text-gray-600 mb-6 space-y-2">
                <li>Excellence in all deliverables</li>
                <li>Integrity and transparency in our work</li>
                <li>Client-focused approach</li>
                <li>Continuous learning and improvement</li>
                <li>Adherence to ethical standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactForm 
        title="Work With Us"
        subtitle="Interested in our services? Get in touch to discuss your project."
      />
    </main>
  );
}
