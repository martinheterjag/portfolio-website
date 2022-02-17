module.exports = [
	{
		id: "hardware-synths",
		title: "Hardware synthesizers",
		description:
			"Hardware synthesizers, sequencers and effects",
		imagePath: "/assets/images/hardware-synths",
		heroName: "hero",
		url: "/project/hardware-synths",
		bgColor: "bg-green-200",
		role: [
			"Electronics engineering, I've been designing and building these projects.",
		],
		tech: [
			"Electronics",
			"Circuit design",
			"KiCad",
			"Eagle",
			"LTspice"
		],
		about: [
			`Synthesizers and music tech gear, I love it! To build, to play or to just dream about.
			This is a collection of the music tech DIY projects I've been working with the past few years.
			My lovely girlfriend Josefina Kennebjörk have been my woodworking partner for many of these projects and also
			helped with soldering.`,
		],
		moreDetails: [
			{
				sectionHeader: "CV Gate Keyboard",
				sectionHeaderImageName: "red-keyboard",
				sectionDetails: `It's made out of wood, it's red and it's beautiful. It contains a +- 12V PSU that i soldered to a perf board and a
					keyboard controller circuit by Ray Wilson musicfromouterspace.com. I bought the PCB from their website and some rare parts.
					It has outputs for CV, CV with portamento controlled by a knob, gate and trigger.`,
			},
			{
				sectionHeader: "",
				sectionHeaderImageName: "pcb",
				sectionDetails: `Picture of the electronics.`,
			},
			{
				sectionHeader: "",
				sectionHeaderImageName: "wood1",
				sectionDetails: `Detail of all keys.`,
			},
			{
				sectionHeader: "",
				sectionHeaderImageName: "wood2",
				sectionDetails: `Numbering every key to make it easier to assemble them in correct order.`,
			},
			{
				sectionHeader: "Skarp Plingeling",
				sectionHeaderImageName: "pling-vco",
				sectionDetails: `Skarp Plingeling was a competence development project I did together with a collegue, Linus Fredriksson, at Skarp
				(Note, when this project was made the company <i>Skarp</i> was named <i>Drakryggen</i>. The name change was done in march 2021). We made a VCA module, a VCO and started to design a state veriable filter.
				Unforunately (very very sad) Linus passed away durign the project due to sudden health issues, and it was never finished.
				Both the VCA and VCO was based of the LM13700 IC (a dual transconductance amplifier). The VCA and VCO was was assemblied but no enclosure was built.
				Simulation was done in LTspice, schematics and PCB design in Eagle and KiCad`,
			},
			{
				sectionHeader: "",
				sectionHeaderImageName: "pling-vca",
				sectionDetails: `Picture of the VCA circuit.`,
			},
			{
				sectionHeader: "\"Gula Guran\", the yellow electric guitar",
				sectionHeaderImageName: "gula-guran",
				sectionDetails: `I assemblied and painted this guitar from a harley benton kit. I don't know what makes a good guitar, but it works and it's
					fun to play and inspires me. The project was fun and i would reccomend the kit, it will not make you a vintage guitar but it's the best
					electric guitar i own! (I only have one more and it's really bad.)`,
			},
			{
				sectionHeader: "Baby 10 Sequencer",
				sectionHeaderImageName: "baby-10",
				sectionDetails: `The first synth DIY project i made, a 10 step CV Gate sequencer based on the Baby 10 schematic from Captain’s Analog.
					It's based on a 4017 CMOS IC and i built it with one row of pots and one row of on-off-on switches to get one CV output and
					two different gate outputs that can never gate at the same step. One trick i use often is to use gate 2 output to trigger a reset,
					this way I can control the sequence length from 1 to 10 steps. The IC have a pin for cartry output, this pin is high on step 1 through 5
					and low on step 6 through 10, i have made this pin available as an output as well for some extra gate action, I use it about once every
					4 years, so you can probably live without it if you want to build something similar.`,
			},
		]
	},
	{
		id: "eurorack",
		title: "Eurorack synth modules",
		description:
			"Hardware synthesizers, in Eurorack format.",
		imagePath: "/assets/images/eurorack",
		heroName: "hero",
		url: "/project/eurorack",
		bgColor: "bg-pink-200",
		role: [
			"Electronics engineering, I've been designing and building these projects.",
		],
		tech: [
			"Electronics",
			"Circuit design",
			"KiCad",
			"JUCE",
			"Raspberry Pi"
		],
		about: [
			`...`,  // TODO: Describe Eurorack and this project.
		],
		moreDetails: [
			{
				sectionHeader: "Wooden case and PSU",
				sectionHeaderImageName: "case",
				sectionDetails: `The case is made in pinewood and painted, four 84 HP Eurorack rails are mounted in the case, which makes it a 6U 84hp rack.
					The PSU PCB have a +- 12V rails as well as a 5V rail for digital modules. The PSU schematic and PCB is designed in KiCad.`,
			},
			{
				sectionHeader: "",
				sectionHeaderImageName: "wip-case",
				sectionDetails: `A picture of the case before it was painted.`,
			},
			{
				sectionHeader: "",
				sectionHeaderImageName: "3d-view",
				sectionDetails: `A 3D model of the PSU.`,
			},
			{
				sectionHeader: "",
				sectionHeaderImageName: "powerbus",
				sectionDetails: `Eurorack bus to connect modules to the PSU.`,
			},
			{
				sectionHeader: "Low Pass Gate",
				sectionHeaderImageName: "lpg",
				sectionDetails: `A classic module, the Buchla 292. Later it was cloned by Peter Grenader and released as a part of Ken Stone's
					CGS project. I based it on the schematics found on Ken Stone's website, but I tweaked it a little bit and made a new PCB design in KiCad.
					The faceplate is made in aluminium, hand drilled and hand painted`,
			},
			{
				sectionHeader: "CEM3340 VCO",
				sectionHeaderImageName: "cem3340",
				sectionDetails: `Dual VCO based on the classic CEM3340 IC used in vintage synths like Roland SH-101, Moog Memorymoog,
					Sequental Circuits Prophet 5 and many more. Each VCO has saw and triangle outputs and 1V/oct and frequency CV inputs.
					There is a switch for turning on soft sync or hard sync between the two oscillators. If you feed the VCO with a negative voltage
					it is possible to use it as an LFO. The circuit and PCB was designed in KiCad, the faceplate is painted aluminium.`,
			},
			{
				sectionHeader: "Drum Machine",
				sectionHeaderImageName: "drum-machine",
				sectionDetails: `A digital drum module with analog interface, based on Raspbery Pi Zero. You can find the project on this
					<a class='text-custom-blue' href=https://github.com/martinheterjag/eurorack-drum-machine>github repository</a>. The circuit is
					soldered on a perf board with headers to mount the Raspbery Pi Zero. There are interfaces tp trigger a bd, sn, cp, ch, oh
					and cy drum sounds. The actual sounds can be replaced by logging in to the Raspberry Pi Zero via SSH and replace the files.
					I am using the JUCE C++ framework to trigger the sounds, and i cross compile the project using a gcc tool-chain for raspberry pi.
					For some reason i am having latency issues when the sounds are played, I've tried with different programming languages and
					libraries and i found JUCE having the lowest latency, but it's still pretty bad. It is on my to-do list to fix this issue.<br><br>
					Also, i drew R2D2 on the faceplate, because robots are cool!`,
			},
			{
				sectionHeader: "Mixer modules",
				sectionHeaderImageName: "mixer",
				sectionDetails: `Two different mixer modules, one with knob for each input and input 1 is normalized to 12V to act as an offset knob if needed.
					The other one have a smaller footprint and a higher gain to boost signals if needed. Both mixers are based on the same circuit, an opamp
					coupled as a summing inverting amplifier followed by an inverter. The larger mixer also have an output before the second stage to get an
					inverted output`,
			},
			{
				sectionHeader: "",
				sectionHeaderImageName: "mix",
				sectionDetails: `Picture of the other mixer module with more gain and smaller footprint.`,
			},
		]
	},
	{
		id: "juce-projects",
		title: "JUCE Projects",
		description:
			"A collection of projects made with the JUCE framework",
		imagePath: "/assets/images/juce-projects",
		heroName: "hero",
		url: "/project/juce-projects",
		bgColor: "bg-blue-200",
		role: [
			"Designed and developed VST plugins using the JUCE framework",
		],
		tech: ["JUCE", "C++", "VST"],
		about: [
			`Since I first heard about JUCE I wanted to try it and learn how to make VST plugins, previously I have made VSTs using SynthEdit, but having a C++ framework means so much more flexibility.
			<br><br>My VST plugins are available for download at <a class='text-custom-blue' href="https://kvraudio.com/developer/martinheterjag">kvraudio</a>.`,
		],
		moreDetails: [
			{
				sectionHeader: "Wave folder",
				sectionHeaderImageName: "Wavefolder",
				sectionDetails: `The Wave folder is inspired by west coast modular synths like Buchla and Serge, where you instead of
					starting with a harsh waveform (Eg. square or saw) and filter it like on a subtractive synth, you instead
					start with a sine wave or triangle and distort it to get a harsher sound. This VST is folding a waveform in
					similar ways as serge or buchla modules but is not supposed to emulate them. The wave folder VST will
					sound harsh and digital and can be used on smoother sounds to add texture or be used on more complex
					sound sources and open the gates to the realms of heavy distortion and weird noise.`,
			},
			{
				sectionHeader: "",
				sectionHeaderImageName: "Folder1",
				sectionDetails: `High treshold setting, waveform is not changed`,
			},
			{
				sectionHeader: "",
				sectionHeaderImageName: "Folder2",
				sectionDetails: `Low treshold setting, the wave is folding.`,
			},
			{
				sectionHeader: "Gramophony",
				sectionHeaderImageName: "Gramophony",
				sectionDetails: `As the name might imply, Gramophony is a Lo-Fi style effect. The effect is inspired by
					the sound of the band Boards of Canada who utilises vibrato, compression and filtering to get a Lo-Fi
					sound on their tracks. The gramophony VST is combining mild distortion, chorus/vibrato and band pass
					filtering. The goal is not to sound as an old gramphone player, but to sound cool, slightly out of tune
					and a little bit more dirty.`,
			}
		],
	},
	{
		id: "kanzchip-8",
		title: "Kanzchip-8",
		description:
			"A CHIP-8 emulator written in python",
		imagePath: "/assets/images/kanzchip-8",
		heroName: "hero",
		url: "/project/kanzchip-8",
		bgColor: "bg-purple-200",
		role: [
			"",
		],
		tech: ["Python", "pygame"],
		about: [
			`kanzchip-8 is a python based CHIP-8 emulator I made together with my friend Chris Stewart, <a class='text-custom-blue' href="https://github.com/cstewart90">cstewart90 on github</a>.`,
		],
		moreDetails: [
			{
				sectionHeader: "What is CHIP-8?",
				sectionHeaderImageName: "",
				sectionDetails: `Snipped from wikipedia:
					"CHIP-8 is an interpreted prgramming language, developed by Joseph Weisbecker. It was initially used
					on the COSMAC VIP and Telmac 1800 8-bit microcomputers in the mid-1970s. CHIP-8 programs are run on
					a CHIP-8 virtual machine. It was made to allow video games to be more easily programmed for
					these computers." <br><br>CHIP-8 has 35 instructions that are all two bytes long. We have
					implemented the instructions based on <a class='text-custom-blue' href=http://devernay.free.fr/hacks/chip8/C8TECH10.HTM>Cowgod's Chip-8 technical reference</a>.`,
			},
			{
				sectionHeader: "How to run kanzchip-8",
				sectionDetails: `From the root folder of the repository, run <span class=font-mono>python -m src</span>.
					To run unit tests run <span class=font-mono>python -m unit-test</span>. To run with debug logs run
					<span class=font-mono>python -m src -d</span>`,
			},
			{
				sectionHeader: "Dependencies",
				sectionDetails: `kanzchip-8 was developed with Python 3.9 and pygame, run pip install -r requirements.txt
					to install all modules needed to run the emulator.`,
			},
			{
				sectionHeader: "Menu bar",
				sectionDetails: `The menu bar holds functions to load a ROM file, reset the currently playing ROM, set
					CPU rate, sound volume as well as setting shift quirks on or off, which affects how the bit-shift
					instructions are working.`,
			},
		],
	},
	{
		id: "quake-maps",
		title: "Quake 3 Arena maps",
		description:
			"Maps I've made for Quake 3 Arena / Quake Live",
		imagePath: "/assets/images/quake-maps",
		heroName: "hero",
		url: "/project/quake-maps",
		bgColor: "bg-orange-200",
		role: [
			"",
		],
		tech: ["GtkRadiant", "GNU Gimp 2", "Q3map2", "Q3 Build"],
		about: [
			`A collection of maps I've made for the game Quake 3 Arena. It's possible to play the maps on Quake Live as well.
			 I've always been into making content for games, ever since i was a kid. Feel free to download and play my maps!`,
		],
		moreDetails: [
			{
				sectionHeader: "mhj-t1",
				sectionHeaderImageName: "mhjtourney1",
				sectionDetails: `The first quake 3 map I made back in 2012. It is made for Duel, small team games or FFA. It's set in some
					kind of abstact temple scene.<br><br>
					<a class='text-custom-blue' download href="/assets/quake-maps/mhj-t1.zip">Download map</a>`,
			},
			{
				sectionHeader: "mhjtourney2",
				sectionHeaderImageName: "mhjtourney2",
				sectionDetails: `This map was made for the <a class='text-custom-blue',
					href="https://www.moddb.com/groups/maverick-servers-quake-3-mapping-competition">
					Maverics Servers Quake 3 Mapping Competition 2012</a>. This map was placed on 4th place.
					The theme of the map is a rainy construction site or factory of some sort. Like any proper quake map,
					it's very abstract and nothing like any construction site in the real world.<br><br>
					<a class='text-custom-blue' download href="/assets/quake-maps/mhjtourney2.zip">Download map</a>`,
			},
			{
				sectionHeader: "mhjtourney3",
				sectionHeaderImageName: "mhjtourney3",
				sectionDetails: `This map is also called "Temple of acid" and is available as a
					<a class='text-custom-blue',
					href="https://steamcommunity.com/sharedfiles/filedetails/?id=803438741">
					workshop item for Quake Live on Steam</a>. This map is made for 1v1 or small team games or free for all.
					The theme of the map is an old ancient temple that have been used for dumping green, not very healthy goo.
					To play it for quake live, use the workshop item on steam, for quake 3 arena use the download link below.<br><br>
					<a class='text-custom-blue' download href="/assets/quake-maps/mhjtourney3_q3a.zip">Download map</a>`,
			},
			{
				sectionHeader: "mhj-space1",
				sectionHeaderImageName: "mhj-space1",
				sectionDetails: `Ever played a space map in pink fog? Now you have the chance! This
					map was made for FFA or other casual game modes. It's gimicky as a space map should be and fun to play.<br><br>
					<a class='text-custom-blue' download href="/assets/quake-maps/mhj-space1.zip">Download map</a>`,
			},
		],
	},
	// {
	// 	id: "template",
	// 	title: "template",
	// 	description:
	// 		"This is a template for a project",
	// 	imagePath: "/assets/images/template",
	// 	heroName: "hero",
	// 	url: "/project/template",
	// 	bgColor: "bg-blue-200",
	// 	role: [
	// 		"",
	// 	],
	// 	tech: ["Things", "Stuff"],
	// 	about: [
	// 		`A short description of the project`,
	// 	],
	// 	moreDetails: [
	// 		{
	// 			sectionHeader: "Header",
	// 			sectionHeaderImageName: "image-name",
	// 			sectionDetails: `Text text text`,
	// 		},
	// 		{
	// 			sectionHeader: "Another header",
	// 			sectionHeaderImageName: "another-image-name",
	// 			sectionDetails: `Text text text`,
	// 		},
	// 	],
	// },
];
