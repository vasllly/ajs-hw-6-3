export default function getDescription(object) {
  let avatar;
  switch (object.type) {
    case 'Bowman':
      avatar = '\u{1F620}';
      break;
    case 'Swordsman':
      avatar = '\u{1F621}';
      break;
    case 'Magician':
      avatar = '\u{1F9D0}';
      break;
    case 'Daemon':
      avatar = '\u{1F47F}';
      break;
    case 'Undead':
      avatar = '\u{1F480}';
      break;
    case 'Zombie':
      avatar = '\u{1F9DF}';
      break;
    default:
      avatar = '';
  }
  return `${avatar} ${object.name.charAt(0)}(${object.level}) \u{2694}${object.attack} \u{1F6E1}${object.defence} \u{2764}${object.health}`;
}
