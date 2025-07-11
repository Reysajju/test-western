import ContactForm from '@/components/ContactForm';

export default function Publishing() {
  return (
    <main>
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Publication Support Services</h1>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-600 mb-8">
                Our publication support services are designed to help researchers and healthcare 
                professionals navigate the complex process of getting their work published in 
                reputable journals.
              </p>

              <h2 className="text-2xl font-bold mb-6">Our Publication Services Include:</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Manuscript Preparation</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Content organization and structuring</li>
                    <li>Data presentation and visualization</li>
                    <li>Reference management</li>
                    <li>Formatting according to journal guidelines</li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Journal Selection</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Target journal analysis</li>
                    <li>Impact factor assessment</li>
                    <li>Submission requirements review</li>
                    <li>Publication timeline planning</li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Submission Support</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Cover letter writing</li>
                    <li>Online submission assistance</li>
                    <li>Artwork preparation</li>
                    <li>Supplementary material organization</li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Post-Submission Support</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Peer review response assistance</li>
                    <li>Manuscript revision support</li>
                    <li>Rebuttal letter preparation</li>
                    <li>Final proof review</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-3">Why Choose Our Publication Services?</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Experienced team with proven publication success</li>
                  <li>Comprehensive support throughout the publication process</li>
                  <li>Adherence to publication ethics and guidelines</li>
                  <li>Customized approach for each manuscript</li>
                  <li>Timely delivery and regular updates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm 
        title="Ready to Publish Your Work?"
        subtitle="Contact us to discuss your publication needs and how we can help."
      />
    </main>
  );
}
