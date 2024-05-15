import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div className="navbar-logo-container">
      <GlobeAltIcon className="navbar-logo" />
      <p className="navbar-text">FADP</p> {/* Aplica la clase navbar-text */}
    </div>
  );
}

