import AgendaArc from './AgendaArc.astro';
import AuditChecklist from './AuditChecklist.astro';
import BinaryLadder from './BinaryLadder.astro';
import BitStates from './BitStates.astro';
import BrowserDoors from './BrowserDoors.astro';
import ByteScale from './ByteScale.astro';
import CaseTimeline from './CaseTimeline.astro';
import CurrentTwoStates from './CurrentTwoStates.astro';
import DataToBits from './DataToBits.astro';
import DdosFanin from './DdosFanin.astro';
import DeepfakeSource from './DeepfakeSource.astro';
import DomainAnatomy from './DomainAnatomy.astro';
import ExtensionPermission from './ExtensionPermission.astro';
import HumanVsSystem from './HumanVsSystem.astro';
import LeakCascade from './LeakCascade.astro';
import MalwareDoors from './MalwareDoors.astro';
import PasswordAttacks from './PasswordAttacks.astro';
import PasswordStrength from './PasswordStrength.astro';
import PlaceValueBinary from './PlaceValueBinary.astro';
import PlaceValueDecimal from './PlaceValueDecimal.astro';
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

  // Урок 3 — двійкова система.
  'data-to-bits': DataToBits,
  'current-two-states': CurrentTwoStates,
  'place-value-decimal': PlaceValueDecimal,
  'place-value-binary': PlaceValueBinary,
  'binary-ladder': BinaryLadder,
  'bit-states': BitStates,
  'byte-scale': ByteScale,
};
