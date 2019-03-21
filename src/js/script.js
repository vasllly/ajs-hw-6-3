export default function getDescription(object) {
  const avatars = {
    Bowman: '\u{1F620}',
    Swordsman: '\u{1F621}',
    Magician: '\u{1F9D0}',
    Daemon: '\u{1F47F}',
    Undead: '\u{1F480}',
    Zombie: '\u{1F9DF}',
  };
  return `${avatars[object.type] ? avatars[object.type] : ''} ${object.name.charAt(0)}(${object.level}) \u{2694}${object.attack} \u{1F6E1}${object.defence} \u{2764}${object.health}`;
}
