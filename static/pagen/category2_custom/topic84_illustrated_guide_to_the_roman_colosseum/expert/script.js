

        const arenaData = [
            {
                title: 'Gladiators',
                img: './roman-colosseum-images/photo-1582555172866-f73bb12a2ab3.jpg',
                text: 'Gladiators were trained professional fighters, often slaves, prisoners of war, or condemned criminals, who were rigorously trained in special schools called ludi. Inside the Colosseum, they fought one another or wild animals in carefully choreographed battles designed to thrill massive crowds. Successful gladiators could earn fame, public admiration, monetary rewards, and in rare cases, their freedom. Despite the violence, many became cultural icons, appearing in graffiti, mosaics, and household objects throughout the Roman world.'
            },
            {
                title: 'Wild Beasts',
                img: './roman-colosseum-images/photo-1546182990-dffeafbe841d.jpg',
                text: 'Wild animal spectacles, known as venationes, showcased Rome’s control over nature and its far-reaching empire. Exotic animals such as lions, leopards, bears, elephants, and even crocodiles were transported from distant provinces to Rome. These hunts demonstrated imperial power while providing shocking and unforgettable entertainment for spectators, reinforcing the idea that Rome ruled both people and the natural world.'
            },
            {
                title: 'Public Spectacles',
                img: './roman-colosseum-images/italy_colosseum_rome_monument_building_romans_places_of_interest_antiquity-1052430.jpg!d',
                text: 'Beyond gladiatorial combat, the Colosseum hosted a wide range of public spectacles including executions, dramatic reenactments of mythological stories, and state-sponsored festivals. These events were designed to reinforce social order, celebrate imperial victories, and remind Roman citizens of the authority and generosity of their rulers, all while providing free entertainment to the masses.'
            }
        ];
        function openArena(i) {
            document.getElementById('arenaTitle').innerText = arenaData[i].title;
            document.getElementById('arenaImg').src = arenaData[i].img;
            document.getElementById('arenaText').innerText = arenaData[i].text;
            document.getElementById('arenaModal').style.display = 'flex';
        }
        function closeArena() { document.getElementById('arenaModal').style.display = 'none' }

        const factData = [
            {
                title: 'Built on a Former Lake',
                text: 'The Colosseum was built on the site of an artificial lake that once belonged to Emperor Nero’s lavish Golden House. After Nero’s death, the Flavian emperors deliberately drained the lake and constructed the amphitheater to return this prime land to the public. This act was deeply symbolic, transforming a space once reserved for imperial excess into a venue for public entertainment and civic life.'
            },
            {
                title: 'Travertine Stone Marvel',
                text: 'More than 100,000 cubic meters of travertine limestone were used to build the Colosseum, quarried from Tivoli and transported to Rome. Iron clamps held the massive stone blocks together without mortar, a technique that gave the structure incredible strength. Many of these clamps were later removed during the Middle Ages, yet the monument still stands today.'
            },
            {
                title: 'Strict Social Hierarchy',
                text: 'Seating inside the Colosseum strictly reflected Roman social order. Emperors and senators sat closest to the arena, while knights occupied the next tier. Ordinary male citizens sat above them, and women and the poor were relegated to the highest levels. This arrangement reinforced social hierarchy while allowing all classes to share the spectacle.'
            }
        ];

        function openFact(i) {
            factTitle.innerText = factData[i].title;
            factText.innerText = factData[i].text;
            factModal.style.display = 'flex';
        }
        function closeFact() { factModal.style.display = 'none' }
