import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-tl-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-100 rounded-br-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=988&q=80" 
                alt="Crystal Miller" 
                className="rounded-xl shadow-lg w-full object-cover h-[500px]"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              About Crystal Miller
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Based in Northern California, Crystal brings more than 20 years of experience in residential lending and a reputation for navigating the loans others often overlook. She specializes in complex financing scenarios and is known for her persistence, clear communication, and steady guidance from application to closing.
              </p>
              <p>
                Crystal works across a wide range of loan products, including Conventional, FHA, USDA, HELOC, and reverse mortgage solutions. With additional training in specialized lending products and a background in real estate, she offers clients both technical expertise and practical insight. Her approach is straightforward: find solutions, communicate clearly, and stay committed until the loan is complete.
              </p>
              <p>
                Deeply rooted in her community, Crystal serves as a school board trustee, president of the Divide Recreation Association, an FFA advisory committee member, and a high school varsity softball coach. She and her husband are also active volunteers at local Rotary events.
              </p>
              <p>
                Outside of work, Crystal enjoys life on her family’s 25-acre property surrounded by horses, cows, goats, chickens, ducks, and her three children. Whether you're facing a challenging loan structure or simply want a lender who answers the phone and follows through, Crystal is ready to help.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">15+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">Top 1%</span>
                <span className="text-sm text-slate-500">Originator in WA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
