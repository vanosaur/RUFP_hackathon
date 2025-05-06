import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8  ml-24 mr-24 border-t">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Digital Wellbeing Initiative</h3>
          <p className="text-sm text-muted-foreground">
            Analyzing and addressing screen addiction among Indian teenagers through research, data, and intervention strategies.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Platform</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/dashboard" className="hover:text-primary">Dashboard</Link></li>
            <li><Link href="/research" className="hover:text-primary">Research</Link></li>
            <li><Link href="/cld" className="hover:text-primary">CLD Analysis</Link></li>
            <li><Link href="/interventions" className="hover:text-primary">Interventions</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>From Articles</li>
            <li>From Wikipedia</li>
            <li>From Chatgpt,Gemini</li>
          </ul>
        </div>

      </div>
      
      <div className="container mt-8 pt-4 border-t text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Digital Wellbeing Initiative. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary">Privacy</Link>
            <Link href="/terms" className="hover:text-primary">Terms</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}