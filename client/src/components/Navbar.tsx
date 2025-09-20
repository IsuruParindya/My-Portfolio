import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { MdClose } from "react-icons/md";
import emailjs from "@emailjs/browser";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState("");
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  // EmailJS keys - updated
  const SERVICE_ID = "service_ko5v79b";
  const TEMPLATE_ID = "template_wb50pof";
  const PUBLIC_KEY = "zvct--uouDLIYkHc4";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus("");

    try {
      const result = await emailjs.send(
        "service_ko5v79b",
        "template_wb50pof",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "zvct--uouDLIYkHc4"
      );
      console.log("EmailJS success:", result);
      setSendStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSendStatus("Failed to send message. Try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/P_logo.png"
              alt="Portfolio Logo"
              className="w-10 h-10 object-contain hover:scale-105 transition-transform duration-200"
            />
            <span className="-ml-3 text-base font-semibold -translate-y-[1px] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">
              arindya
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors hover-elevate rounded-md px-3 py-2 ${
                  isActiveLink(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button type="button" onClick={() => setShowPopup(true)} className="gap-2">
              <Mail className="h-4 w-4" />
              Hire Me
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <MdClose className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors hover-elevate rounded-md px-3 py-2 ${
                    isActiveLink(item.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 flex items-center justify-between gap-3">
                <Button type="button" onClick={() => setShowPopup(true)} className="flex-1 gap-2">
                  <Mail className="h-4 w-4" />
                  Hire Me
                </Button>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed top-20 right-4 z-[60] w-72">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 relative animate-fade-in-up">
            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black dark:hover:text-white"
            >
              <MdClose size={20} />
            </button>

            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100 border-b pb-2">
              Contact Me
            </h2>

            {/* Contact Info */}
            <div className="text-sm text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" /> Colombo, Sri Lanka
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" /> +94 71 880 7316
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" /> parindyapigera@gmail.com
              </p>
            </div>

            {/* Contact Form */}
            <form className="space-y-3" onSubmit={handleSendMessage}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border-b border-gray-400 dark:border-gray-600 bg-transparent p-2 text-sm focus:outline-none focus:border-purple-500 transition"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border-b border-gray-400 dark:border-gray-600 bg-transparent p-2 text-sm focus:outline-none focus:border-purple-500 transition"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full border-b border-gray-400 dark:border-gray-600 bg-transparent p-2 text-sm h-24 focus:outline-none focus:border-purple-500 transition"
                required
              ></textarea>

              <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}
              </Button>

              {sendStatus && (
                <p className={`text-sm mt-1 ${sendStatus.includes("success") ? "text-green-500" : "text-red-500"}`}>
                  {sendStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}