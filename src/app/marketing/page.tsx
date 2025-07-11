import ContactForm from '@/components/ContactForm';

export default function Marketing() {
  return (
    <main>
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Medical Marketing Services</h1>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-600 mb-8">
                Our medical marketing services help healthcare professionals and organizations 
                effectively communicate their value proposition while maintaining compliance 
                with healthcare marketing regulations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">Content Development</h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Website content</li>
                    <li>Blog posts and articles</li>
                    <li>Patient education materials</li>
                    <li>Email newsletters</li>
                    <li>Social media content</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">Marketing Materials</h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Brochures and flyers</li>
                    <li>Product datasheets</li>
                    <li>Case studies</li>
                    <li>Presentation materials</li>
                    <li>Video scripts</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8 mb-12">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">Research</h3>
                      <p className="text-gray-600">
                        Thorough market and audience analysis to inform content strategy
                      </p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">Create</h3>
                      <p className="text-gray-600">
                        Expert content development with medical accuracy
                      </p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">Optimize</h3>
                      <p className="text-gray-600">
                        Continuous improvement based on performance metrics
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Why Choose Our Marketing Services?</h2>
                  <div className="bg-primary-50 p-6 rounded-lg">
                    <ul className="list-disc list-inside text-gray-600 space-y-3">
                      <li>Healthcare industry expertise</li>
                      <li>Compliance with medical marketing regulations</li>
                      <li>Evidence-based content development</li>
                      <li>Audience-focused messaging</li>
                      <li>Measurable results and analytics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm 
        title="Elevate Your Medical Marketing"
        subtitle="Contact us to discuss your marketing needs and goals."
      />
    </main>
  );
}
