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
			My lovely girlfriend Josefina Kennebjörk have been my woodworking partner for many of these projects.`,
		],
		moreDetails: [
			{
				sectionHeader: "Eurorack wooden case and PSU",
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
				sectionHeader: "Eurorack module LPG",
				sectionHeaderImageName: "lpg",
				sectionDetails: `A classic module, the Buchla 292. Later it was cloned by Peter Grenader and released as a part of on Ken Stone's
					CGS project. I based it on the schematics found on Ken Stone's website but tweaked it a little bit and made a new PCB design in KiCad.
					The faceplate is made in aluminium, ahnd drilled and hand painted`,
			},
			{
				sectionHeader: "Eurorack module CEM3340 VCO",
				sectionHeaderImageName: "cem3340",
				sectionDetails: `Dual VCO based on the classic CEM3340 IC used in many vintage synths like Roland SH-101, Moog Memorymoog,
					Sequental Circuits Prophet 5 and many more. Each VCO has saw and triangle outputs and 1V/oct and frequency CV inputs.
					There is a switch for turning on soft sync or hard sync between the two oscillators. If you feed the VCO with a negative voltage
					it is possible to use it as an LFO. The circuit and PCB was designed in KiCad, the faceplate is painted aluminium.`,
			},
			{
				sectionHeader: "Eurorack module mixer modules",
				sectionHeaderImageName: "mixer",
				sectionDetails: `Two different mixer modules, one with knob for each input and input 1 is normalized to 12V to act as an offset knob if needed.
					The other one have a smaller footprint and a higher gain to boost signals if needed. Both mixers are based on the same circuit, an opamp
					coupled as a summing inverting amplifier followed by an inverter. The larger mixer also have an output before the second stage to get an
					inverted output`,
			},
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
				sectionHeader: "\"Gula Guran\", the yellow electric guitar",
				sectionHeaderImageName: "gula-guran",
				sectionDetails: `I assemblied and painted this guitar from a harley benton kit. I don't know much about guitars, but it made me get into
					guitar pedals and soon i need to build a new pedal board.`,
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
			`Since I first heard about JUCE I wanted to try it and learn how to make VST plugins, previously I have made VSTs using SynthEdit, but having a C++ framework means so much more flexibility.`,
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
					sound sources and open the gates to the realms of heavy distortion and weird noise.
					das`,
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
				sectionDetails: `As the name might imply, Gramophony is a lofi style effect. The effect is inspired by
					the sound fo the band Boards of Canada who utilises vibrato compression and filtering to get a lofi
					sound on their tracks. The gramophony VST is combining mild distortion, chorus/vibrato and band pass
					filtering. The goal is not to sound as an old gramphone player, but to sound cool, slightly out of tune
					and a little bit more dirty.`,
			}
		],
	},
];
