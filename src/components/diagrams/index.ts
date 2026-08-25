import AntivirusVsFirewall from './AntivirusVsFirewall.astro';
import AuditChecklist from './AuditChecklist.astro';
import CaseTimeline from './CaseTimeline.astro';
import DomainAnatomy from './DomainAnatomy.astro';
import LeakCascade from './LeakCascade.astro';
import MalwareDoors from './MalwareDoors.astro';
import PasswordStrength from './PasswordStrength.astro';
import TwoPadlocks from './TwoPadlocks.astro';

/**
 * Diagrams available to slides by name. A slide's `visual: {type: diagram, name}`
 * looks up here; an unknown name renders nothing rather than breaking the deck.
 */
export const diagrams: Record<string, any> = {
  'password-strength': PasswordStrength,
  'leak-cascade': LeakCascade,
  'malware-doors': MalwareDoors,
  'case-timeline': CaseTimeline,
  'two-padlocks': TwoPadlocks,
  'domain-anatomy': DomainAnatomy,
  'antivirus-vs-firewall': AntivirusVsFirewall,
  'audit-checklist': AuditChecklist,
};
