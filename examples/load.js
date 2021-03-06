'use strict';

const fs = require('fs');
const shdb = require('../src');

let heroes = [
  'https://www.superherodb.com/hulk/10-83/',
  'https://www.superherodb.com/spider-man/10-133/',
  'https://www.superherodb.com/the-wasp/10-155/',
  'https://www.superherodb.com/thor-odin-force/10-13965/',
  'https://www.superherodb.com/tigra/10-42/',
  'https://www.superherodb.com/vision/10-532/',
  'https://www.superherodb.com/war-machine-ii/10-152/',
  'https://www.superherodb.com/quicksilver/10-115/',
  'https://www.superherodb.com/nick-fury/10-326/',
  'https://www.superherodb.com/hawkeye/10-73/',
  'https://www.superherodb.com/ghost-rider/10-67/',
  'https://www.superherodb.com/falcon/10-56/',
  'https://www.superherodb.com/captain-marvel/10-103/',
  'https://www.superherodb.com/black-panther/10-247/',
  'https://www.superherodb.com/baron-zemo/10-10406/',
  'https://www.superherodb.com/ant-man/10-857/',
  'https://www.superherodb.com/a-bomb/10-10060/',
  'https://www.superherodb.com/iron-man/10-85/',
  'https://www.superherodb.com/captain-america/10-274/',
  'https://www.superherodb.com/ultron/10-1339/',
  'https://www.superherodb.com/scarlet-witch/10-444/',
  'https://www.superherodb.com/black-widow/10-248/',
  'https://www.superherodb.com/doctor-strange-classic/10-55/',
  'https://www.superherodb.com/daredevil/10-52/',
  'https://www.superherodb.com/elektra/10-625/',
  'https://www.superherodb.com/silver-surfer/10-127/',
  'https://www.superherodb.com/wolverine/10-161/',
  'https://www.superherodb.com/rogue/10-831/',
  'https://www.superherodb.com/professor-x/10-113/',
  'https://www.superherodb.com/mystique/10-817/',
  'https://www.superherodb.com/magneto/10-12/',
  'https://www.superherodb.com/juggernaut/10-826/',
  'https://www.superherodb.com/deadpool/10-835/',
  'https://www.superherodb.com/gambit/10-64/',
  'https://www.superherodb.com/colossus/10-48/',
  'https://www.superherodb.com/storm/10-135/',
  'https://www.superherodb.com/beast-fox/10-13906/',
  'https://www.superherodb.com/ken/10-11030/',
  'https://www.superherodb.com/dr-manhattan/10-884/',
  'https://www.superherodb.com/deathstroke/10-672/',
  'https://www.superherodb.com/deadshot/10-670/',
  'https://www.superherodb.com/darkseid/10-668/',
  'https://www.superherodb.com/cyborg/10-1204/',
  'https://www.superherodb.com/catwoman/10-659/',
  'https://www.superherodb.com/captain-marvel-kingdom-come/10-13436/',
  'https://www.superherodb.com/black-canary/10-644/',
  'https://www.superherodb.com/black-adam/10-643/',
  'https://www.superherodb.com/beast-boy/10-640/',
  'https://www.superherodb.com/batman/10-639/',
  'https://www.superherodb.com/batgirl/10-1111/',
  'https://www.superherodb.com/bane/10-637/',
  'https://www.superherodb.com/athena/10-10408/',
  'https://www.superherodb.com/aquaman/10-634/',
  'https://www.superherodb.com/queen-hippolyta/10-10639/',
  'https://www.superherodb.com/power-girl/10-758/',
  'https://www.superherodb.com/poison-ivy/10-757/',
  'https://www.superherodb.com/nightshade/10-18596/',
  'https://www.superherodb.com/mister-freeze/10-742/',
  'https://www.superherodb.com/lucifer-morningstar/10-10807/',
  'https://www.superherodb.com/lex-luthor/10-727/',
  'https://www.superherodb.com/joker/10-719/',
  'https://www.superherodb.com/john-constantine/10-718/',
  'https://www.superherodb.com/james-gordon/10-714/',
  'https://www.superherodb.com/hawkman/10-839/',
  'https://www.superherodb.com/harley-quinn/10-701/',
  'https://www.superherodb.com/green-lantern/10-697/',
  'https://www.superherodb.com/green-arrow/10-696/',
  'https://www.superherodb.com/general-zod/10-837/',
  'https://www.superherodb.com/the-flash/10-892/',
  'https://www.superherodb.com/doomsday/10-679/',
  'https://www.superherodb.com/wonder-woman/10-807/',
  'https://www.superherodb.com/two-face/10-802/',
  'https://www.superherodb.com/the-comedian/10-1062/',
  'https://www.superherodb.com/superman-post-crisis/10-791/',
  'https://www.superherodb.com/superboy/10-789/',
  'https://www.superherodb.com/supergirl/10-790/',
  'https://www.superherodb.com/steppenwolf/10-10653/',
  'https://www.superherodb.com/starfire/10-786/',
  'https://www.superherodb.com/shazam/10-278/',
  'https://www.superherodb.com/scarecrow/10-819/',
  'https://www.superherodb.com/rorschach/10-771/',
  'https://www.superherodb.com/robin/10-850/',
  'https://www.superherodb.com/riddler/10-768/',
  'https://www.superherodb.com/red-hood/10-932/',
  'https://www.superherodb.com/raven/10-764/',
  'https://www.superherodb.com/goku/10-1284/',
  'https://www.superherodb.com/black-cat/10-32/',
  'https://www.superherodb.com/beyonder/10-1293/',
  'https://www.superherodb.com/apocalypse/10-852/',
  'https://www.superherodb.com/mantis/10-384/',
  'https://www.superherodb.com/mandarin/10-1175/',
  'https://www.superherodb.com/magneto/10-12/',
  'https://www.superherodb.com/loki/10-928/',
  'https://www.superherodb.com/knull/10-14705/',
  'https://www.superherodb.com/kingpin/10-623/',
  'https://www.superherodb.com/juggernaut/10-826/',
  'https://www.superherodb.com/human-torch/10-362/',
  'https://www.superherodb.com/heimdall/10-10427/',
  'https://www.superherodb.com/happy-hogan/10-11786/',
  'https://www.superherodb.com/groot/10-10017/',
  'https://www.superherodb.com/green-goblin/10-579/',
  'https://www.superherodb.com/galactus/10-862/',
  'https://www.superherodb.com/falcon/10-56/',
  'https://www.superherodb.com/elektra/10-625/',
  'https://www.superherodb.com/ego/10-6/',
  'https://www.superherodb.com/ebony-maw/10-11957/',
  'https://www.superherodb.com/drax-the-destroyer/10-10016/',
  'https://www.superherodb.com/dormammu/10-1359/',
  'https://www.superherodb.com/doctor-doom/10-189/',
  'https://www.superherodb.com/dark-phoenix/10-12035/',
  'https://www.superherodb.com/jean-grey/10-814/',
  'https://www.superherodb.com/daredevil/10-52/',
  'https://www.superherodb.com/captain-planet/10-1285/',
  'https://www.superherodb.com/cable/10-40/',
  'https://www.superherodb.com/zeus/10-11116/',
  'https://www.superherodb.com/wolverine/10-161/',
  'https://www.superherodb.com/vulture/10-1031/',
  'https://www.superherodb.com/vision/10-532/',
  'https://www.superherodb.com/valkyrie/10-147/',
  'https://www.superherodb.com/ultron/10-1339/',
  'https://www.superherodb.com/tyrant/10-10424/',
  'https://www.superherodb.com/thanos/10-1305/',
  'https://www.superherodb.com/star-lord/10-10015/',
  'https://www.superherodb.com/stan-lee/10-10825/',
  'https://www.superherodb.com/squirrel-girl/10-10235/',
  'https://www.superherodb.com/silver-surfer/10-127/',
  'https://www.superherodb.com/sabretooth/10-17/',
  'https://www.superherodb.com/rogue/10-831/',
  'https://www.superherodb.com/red-skull/10-1392/',
  'https://www.superherodb.com/punisher/10-112/',
  'https://www.superherodb.com/psylocke/10-114/',
  'https://www.superherodb.com/phoenix/10-828/',
  'https://www.superherodb.com/one-above-all/10-10374/',
  'https://www.superherodb.com/odin/10-10388/',
  'https://www.superherodb.com/namor/10-137/',
  'https://www.superherodb.com/mysterio/10-1039/',
  'https://www.superherodb.com/mockingbird/10-1328/',
  'https://www.superherodb.com/mister-fantastic/10-408/',
  'https://www.superherodb.com/thing/10-139/',
  'https://www.superherodb.com/invisible-woman/10-620/',
];

heroes.reduce(async (previous, url) => {
  await previous;
  let heroId = url.substring('https://www.superherodb.com'.length);
  return shdb.fetch(heroId).then((res) => {
    let slug = res.slug;
    let data = JSON.stringify(res, null, 2);
    fs.writeFile('data/' + slug + '.json', data, function (err) {
        if (err) throw err;
        console.log('Saved!');
      }
    );
  });
}, Promise.resolve());
