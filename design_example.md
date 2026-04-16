<div class="title">eccolo <span>software design</span></div>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Playwrite+IS:wght@100..400&display=swap');



* {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  color: #222;
  background-color: #ececec;
  font-size: clamp(1rem, 2vw + 0.5rem, 2rem);
  // font-size: 24px;
  font-family: "Poppins", sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  overflow: hidden;
  padding: 36px 12px;

  span {
    position: relative;
    font-family: "Playwrite IS", cursive;
    font-size: 1.4em;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 63%;
      translate: -50% 0;
      width: 250%;
      aspect-ratio: 1/1;
      z-index: -1;
      border: 30px solid #a8de97;
      border-radius: 50%;

      @starting-style {
        --mask-progress: 0%;
      }
      transition: --mask-progress 0.5s;
      transition-delay: 0.3s;
      mask-image: conic-gradient(from -27deg, #000 var(--mask-progress), #0000 0);

      @media (max-width: 768px) {
        border-width: 20px;
      }
    }

  }
}

@property --mask-progress {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 12%;
}



<div class="stage">
	<div class="tag tag-tl">// together · apart</div>
	<div class="tag tag-tr">css only</div>

	<div class="word-wrap">
		<div class="word word-together">
			<span>E</span><span>C</span><span>C</span><span>O</span><span>L</span><span>O</span>
		</div>
		<div class="word word-apart">
			<span>D</span><span>E</span><span>S</span><span>I</span><span>G</span><span>N</span>
		</div>
	</div>

	<div class="pip-row">
		<div class="pip pip-1"></div>
		<div class="pip pip-2"></div>
	</div>
</div>


@import url
		(
			"https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=DM+Sans:wght@300;400;500;600&display=swap"
		) *,
	*: : before, *: : after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

:root {
	--bg: #0d0d0d;
	--text: #e8e8e8;
	--accent: #e8ff47;
	--muted: #444;
	--total: 14s;
}

body {
	background: var(--bg);
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

.stage {
	width: 100%;
	min-height: 90svh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	overflow: hidden;
	padding: 2rem 1rem;
}

.tag {
	position: absolute;
	font-family: "DM Mono", monospace;
	font-size: 0.58rem;
	letter-spacing: 0.18em;
	text-transform: uppercase;
	color: var(--muted);
}

.tag-tl {
	top: 24px;
	left: 28px;
}
.tag-tr {
	top: 24px;
	right: 28px;
}

.word-wrap {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 5rem;
	position: relative;
}

.word {
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: "Roboto Flex", sans-serif;
	font-size: 7rem;
	line-height: 1;
	text-transform: uppercase;
	position: absolute;
}

.wordspan {
	display: inline-block;
	will-change: transform, opacity;
}

/* ── TOGETHER ── */
.word-together {
	font-variation-settings: "wdth" 88, "wght" 700;
	color: var(--text);
	animation: groupFade var(--total) ease infinite;
}

@keyframes groupFade {
	0% {
		opacity: 1;
	}
	42% {
		opacity: 1;
	}
	46% {
		opacity: 0;
	}
	100% {
		opacity: 0;
	}
}

.word-together span {
	animation: gatherLetter var(--total) cubic-bezier(0.34, 1.46, 0.64, 1) infinite;
}

@keyframes gatherLetter {
	0% {
		transform: translate(var(--sx), var(--sy)) rotate(var(--sr));
		opacity: 0;
	}
	4% {
		opacity: 1;
	}
	18% {
		transform: translate(0, 0) rotate(0deg);
		opacity: 1;
	}
	42% {
		transform: translate(0, 0) rotate(0deg);
		opacity: 1;
	}
	46% {
		transform: translate(0, 0) rotate(0deg);
		opacity: 0;
	}
	100% {
		transform: translate(var(--sx), var(--sy)) rotate(var(--sr));
		opacity: 0;
	}
}

.word-together span:nth-child(1) {
	--sx: -140px;
	--sy: -8px;
	--sr: -25deg;
	animation-delay: 0s;
}
.word-together span:nth-child(2) {
	--sx: -60px;
	--sy: 110px;
	--sr: 15deg;
	animation-delay: 0.05s;
}
.word-together span:nth-child(3) {
	--sx: -110px;
	--sy: 30px;
	--sr: -40deg;
	animation-delay: 0.1s;
}
.word-together span:nth-child(4) {
	--sx: 20px;
	--sy: -120px;
	--sr: 30deg;
	animation-delay: 0.15s;
}
.word-together span:nth-child(5) {
	--sx: 130px;
	--sy: -50px;
	--sr: -18deg;
	animation-delay: 0.2s;
}
.word-together span:nth-child(6) {
	--sx: 70px;
	--sy: 100px;
	--sr: 45deg;
	animation-delay: 0.25s;
}
.word-together span:nth-child(7) {
	--sx: -30px;
	--sy: 130px;
	--sr: -35deg;
	animation-delay: 0.3s;
}
.word-together span:nth-child(8) {
	--sx: 160px;
	--sy: 60px;
	--sr: 22deg;
	animation-delay: 0.35s;
}

/* ── APART ── */
.word-apart {
	font-variation-settings: "wdth" 100, "wght" 300;
	color: var(--accent);
	animation: groupFade2 var(--total) ease infinite;
}

@keyframes groupFade2 {
	0%,
	48% {
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	88% {
		opacity: 1;
	}
	93% {
		opacity: 0;
	}
	100% {
		opacity: 0;
	}
}

.word-apart span {
	animation: scatterLetter var(--total) cubic-bezier(0.16, 1, 0.3, 1) infinite;
}

@keyframes scatterLetter {
	0%,
	48% {
		transform: translate(0, 0) rotate(0deg);
		opacity: 0;
	}
	50% {
		transform: translate(0, 0) rotate(0deg);
		opacity: 1;
	}
	52% {
		transform: translate(0, 0) rotate(0deg);
		opacity: 1;
	}
	80% {
		transform: translate(var(--ex), var(--ey)) rotate(var(--er));
		opacity: 0.6;
	}
	88% {
		transform: translate(var(--ex), var(--ey)) rotate(var(--er));
		opacity: 0;
	}
	100% {
		transform: translate(0, 0) rotate(0deg);
		opacity: 0;
	}
}

.word-apart span:nth-child(1) {
	--ex: -160px;
	--ey: -90px;
	--er: -30deg;
	animation-delay: 0s;
}
.word-apart span:nth-child(2) {
	--ex: -80px;
	--ey: 120px;
	--er: 20deg;
	animation-delay: 0.06s;
}
.word-apart span:nth-child(3) {
	--ex: 10px;
	--ey: -140px;
	--er: -15deg;
	animation-delay: 0.12s;
}
.word-apart span:nth-child(4) {
	--ex: 100px;
	--ey: 70px;
	--er: 40deg;
	animation-delay: 0.18s;
}
.word-apart span:nth-child(5) {
	--ex: 170px;
	--ey: -60px;
	--er: -25deg;
	animation-delay: 0.24s;
}

/* ── Pips ── */
.pip-row {
	position: absolute;
	bottom: 24px;
	display: flex;
	gap: 10px;
}

.pip {
	width: 3px;
	height: 3px;
	border-radius: 50%;
	background: #2a2a2a;
}

.pip-1 {
	animation: pipOn var(--total) ease infinite;
}
.pip-2 {
	animation: pipOn var(--total) ease infinite;
	animation-delay: calc(var(--total) * 0.48);
}

@keyframes pipOn {
	0%,
	2% {
		background: var(--accent);
	}
	44% {
		background: var(--accent);
	}
	46% {
		background: #2a2a2a;
	}
	100% {
		background: #2a2a2a;
	}
}

