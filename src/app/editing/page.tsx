import ContactForm from '@/components/ContactForm';

export default function Editing() {
  return (
    <main>
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Medical Editing Services</h1>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-600 mb-8">
                Our medical editing services ensure your documents are clear, accurate, and ready 
                for publication. We offer different levels of editing to meet your specific needs.
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-primary-500 pl-6">
                  <h2 className="text-2xl font-bold mb-4">Comprehensive Editing</h2>
                  <p className="text-gray-600 mb-4">
                    A thorough review of your document focusing on:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Grammar, spelling, and punctuation</li>
                    <li>Clarity and readability</li>
                    <li>Scientific accuracy</li>
                    <li>Document structure and flow</li>
                    <li>Formatting and style consistency</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary-500 pl-6">
                  <h2 className="text-2xl font-bold mb-4">Technical Editing</h2>
                  <p className="text-gray-600 mb-4">
                    Specialized editing for technical and scientific content:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Technical accuracy verification</li>
                    <li>Data presentation review</li>
                    <li>Reference checking</li>
                    <li>Terminology consistency</li>
                    <li>Compliance with guidelines</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary-500 pl-6">
                  <h2 className="text-2xl font-bold mb-4">Language Polishing</h2>
                  <p className="text-gray-600 mb-4">
                    Perfect for non-native English writers:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>English language improvement</li>
                    <li>Style enhancement</li>
                    <li>Idiomatic expression correction</li>
                    <li>Academic tone adjustment</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Our Editing Process</h3>
                <ol className="list-decimal list-inside text-gray-600 space-y-3">
                  <li>Initial assessment of your document</li>
                  <li>Assignment to a subject matter expert editor</li>
                  <li>Comprehensive editing according to selected service level</li>
                  <li>Quality check by a senior editor</li>
                  <li>Delivery with tracked changes and comments</li>
                  <li>Post-delivery support and clarifications</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm 
        title="Need Professional Editing?"
        subtitle="Contact us to discuss your editing requirements and get a quote."
      />
    </main>
  );
}
