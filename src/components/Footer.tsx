import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mt-auto px-8 py-8">
      <div className="mx-auto max-w-6xl text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
