const tl = new TimelineMax();

tl.add("handStart");
tl.fromTo(
  "#Hand1",
  0.6,
  {
    transformOrigin: "left",
    rotate: 10,
    repeat: -1,
    repeatDelay: "-.5s",
    yoyo: true,
  },
  {
    transformOrigin: "left",
    rotate: -40,
    yoyo: true,
    repeat: -1,
    repeatDelay: 0,
    yoyo: true,
  },
  "handStart"
);

tl.fromTo(
  "#Hand2",
  0.6,
  {
    transformOrigin: "right",
    rotate: 40,
    repeat: -1,
    repeatDelay: 0,
    yoyo: true,
  },
  {
    transformOrigin: "right",
    rotate: -10,
    yoyo: true,
    repeat: -1,
    repeatDelay: 0,
    yoyo: true,
  },
  "handStart-=1"
);
tl.fromTo(
  "#Face",
  1,
  {
    transformOrigin: "center",
    rotate: 20,
    yoyo: true,
    repeat: -1,
    repeatDelay: 0,
    yoyo: true,
  },
  {
    transformOrigin: "center",
    rotate: -20,
    yoyo: true,
    repeat: -1,
    repeatDelay: 0,
    yoyo: true,
  },
  "handStart+=1"
);
