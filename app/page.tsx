import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, MessageCircle, Shield, Star, Users, X } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#FF5A5F] via-[#FF5A5F] to-[#FFC1CC] text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <Heart className="h-6 w-6 mr-2 fill-white" />
            <span className="text-2xl font-bold">Lag Dates</span>
          </div>
          <div className="flex gap-3">
            <Link href="/auth/login">
              <Button variant="ghost" className="text-white hover:bg-white/10 border border-white/30">
                Login
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-white text-[#FF5A5F] hover:bg-white/90">Sign Up</Button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Find Your Perfect Campus Connection
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-lg">
              Lag Dates connects university students based on shared interests, classes, and campus activities. Meet,
              chat, and date within your campus community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-white text-[#FF5A5F] hover:bg-white/90">
                  Create Free Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative h-[500px] w-full max-w-md mx-auto">
              {/* Phone mockup */}
              <div className="absolute inset-0 bg-slate-800 rounded-[3rem] border-[8px] border-slate-700 shadow-xl overflow-hidden">
                {/* App screen mockup */}
                <div className="absolute inset-0 bg-white">
                  {/* App header */}
                  <div className="bg-[#FF5A5F] text-white p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <Heart className="h-5 w-5 mr-2 fill-white" />
                      <span className="font-bold">Lag Dates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                  </div>

                  {/* Profile cards */}
                  <div className="p-4">
                    <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h3 className="text-white text-xl font-bold">Tiana, 21</h3>
                        <p className="text-white/90">Computer Science • 2 miles away</p>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex justify-between">
                      <Button size="icon" className="h-12 w-12 rounded-full bg-white border border-slate-200">
                        <X className="h-6 w-6 text-slate-500" />
                      </Button>
                      <Button size="icon" className="h-12 w-12 rounded-full bg-[#FF5A5F] text-white">
                        <Heart className="h-6 w-6" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 h-24 w-24 bg-[#FFC1CC] rounded-full opacity-70"></div>
              <div className="absolute -bottom-8 -left-8 h-32 w-32 bg-[#5D5FEF] rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-[#FFC1CC]/10 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">How Lag Dates Works</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our platform is designed specifically for university students to make meaningful connections on campus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Match with Students",
                description: "Connect with students who share your interests, classes, and campus activities.",
                color: "bg-[#FF5A5F]",
              },
              {
                icon: MessageCircle,
                title: "Chat & Connect",
                description: "Send messages, photos, and plan meetups with your campus connections.",
                color: "bg-[#FFC1CC]",
              },
              {
                icon: Star,
                title: "Date on Campus",
                description: "Discover events, popular spots, and activities perfect for campus dating.",
                color: "bg-[#5D5FEF]",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 transform transition-transform hover:scale-105"
              >
                <div className={`${feature.color} text-white p-3 rounded-full inline-flex mb-6`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-[#FF5A5F] to-[#FFC1CC] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Students Love Lag Dates</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Hear what students across campuses are saying about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "I met my girlfriend in the same Computer Science class through Lag Dates. The app made it so easy to connect!",
                name: "Michael S.",
                university: "Stanford University",
                image: "/placeholder.svg?height=60&width=60",
              },
              {
                quote:
                  "As a transfer student, Lag Dates helped me make friends and even find a study group for my classes.",
                name: "Emma L.",
                university: "UC Berkeley",
                image: "/placeholder.svg?height=60&width=60",
              },
              {
                quote:
                  "The campus events feature is amazing! I've attended so many fun activities and met great people.",
                name: "James T.",
                university: "UCLA",
                image: "/placeholder.svg?height=60&width=60",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-300 fill-amber-300" />
                  ))}
                </div>
                <p className="mb-6 text-white/90">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-slate-200 mr-3 overflow-hidden">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-white/80 text-sm">{testimonial.university}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Available at Top Universities</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Lag Dates is expanding to campuses across the country.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Stanford University",
              "UC Berkeley",
              "UCLA",
              "USC",
              "Harvard University",
              "MIT",
              "Yale University",
              "Princeton University",
            ].map((university, i) => (
              <div key={i} className="bg-white rounded-lg p-4 text-center shadow-md border border-slate-100">
                <div className="h-12 w-12 bg-slate-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="font-bold text-slate-500">{university.charAt(0)}</span>
                </div>
                <p className="font-medium text-slate-700">{university}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-16 bg-gradient-to-r from-[#FF5A5F] to-[#FFC1CC] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Features</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Upgrade your dating experience with Lag Dates Premium.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Unlimited Matches",
                description: "No daily limit on how many people you can match with.",
                icon: Heart,
              },
              {
                title: "See Who Likes You",
                description: "Discover who's interested in you before you swipe.",
                icon: Star,
              },
              {
                title: "Advanced Filters",
                description: "Filter by major, interests, and more specific preferences.",
                icon: Users,
              },
              {
                title: "Priority Profile",
                description: "Get seen by more people with priority profile placement.",
                icon: Shield,
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="bg-white/20 p-3 rounded-full">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/90">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-[#FF5A5F] hover:bg-white/90">
              Upgrade to Premium
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#FF5A5F] to-[#FFC1CC] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Campus Match?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Join thousands of students who are already connecting, dating, and making new friends on campus.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-white text-[#FF5A5F] hover:bg-white/90">
                Create Free Account
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FF5A5F] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 mr-2 fill-white" />
                <span className="text-xl font-bold">Lag Dates</span>
              </div>
              <p className="text-white/80">The premier dating app exclusively for university students.</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About", "Features", "Events", "Safety", "Universities"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-white/80 hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                {["Terms of Service", "Privacy Policy", "Cookie Policy", "Community Guidelines"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-white/80 hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-white/80">support@lagdates.com</li>
                <li className="text-white/80">1-800-LAG-DATE</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>© {new Date().getFullYear()} Lag Dates. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
