import AgendaArc from './AgendaArc.astro';
import AuditChecklist from './AuditChecklist.astro';
import BrowserDoors from './BrowserDoors.astro';
import CaseTimeline from './CaseTimeline.astro';
import DdosFanin from './DdosFanin.astro';
import DeepfakeSource from './DeepfakeSource.astro';
import DomainAnatomy from './DomainAnatomy.astro';
import ExtensionPermission from './ExtensionPermission.astro';
import HumanVsSystem from './HumanVsSystem.astro';
import LeakCascade from './LeakCascade.astro';
import MalwareDoors from './MalwareDoors.astro';
import PasswordAttacks from './PasswordAttacks.astro';
import PasswordStrength from './PasswordStrength.astro';
import Takeaways from './Takeaways.astro';
import TwoPadlocks from './TwoPadlocks.astro';
import WifiRisk from './WifiRisk.astro';

/**
 * Diagrams available to slides by name. A slide's `visual: {type: diagram, name}`
 * looks up here; an unknown name renders nothing rather than breaking the deck.
 */
export const diagrams: Record<string, any> = {
  'agenda-arc': AgendaArc,
  'human-vs-system': HumanVsSystem,
  'password-attacks': PasswordAttacks,
  'ddos-fanin': DdosFanin,
  'wifi-risk': WifiRisk,
  'browser-doors': BrowserDoors,
  'extension-permission': ExtensionPermission,
  'deepfake-source': DeepfakeSource,
  'takeaways': Takeaways,
  'password-strength': PasswordStrength,
  'leak-cascade': LeakCascade,
  'malware-doors': MalwareDoors,
  'case-timeline': CaseTimeline,
  'two-padlocks': TwoPadlocks,
  'domain-anatomy': DomainAnatomy,
  'audit-checklist': AuditChecklist,
};
