import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled, keyframes } from "@mui/material/styles";
import myLocalImage30 from "../assets/apple1.png";
import myLocalImage31 from "../assets/Nokia.png";
import myLocalImage32 from "../assets/realme1.png";
import myLocalImage33 from "../assets/vivo1.png";
import myLocalImage34 from "../assets/paytm1.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "#1A2027" : "rgb(66, 200, 183)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  overflow: "hidden",
  border: "none",
  flexWrap: "wrap",
}));

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MarqueeContainer = styled("div")`
  display: flex;
  white-space: nowrap;
  animation: ${marqueeAnimation} 15s linear infinite;
`;

const Image = styled("img")`
  height: 100px;
  width: 100%;
  margin-right: 16px;
`;

export default function DividerStack() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item>
          <MarqueeContainer sx={{ maxWidth: "100%" }}>
            <Image src={myLocalImage30} alt="Apple" />
            <Image src={myLocalImage31} alt="Nokia" />
            <Image src={myLocalImage32} alt="RealMe" />
            <Image src={myLocalImage33} alt="Vivo" />
            <Image src={myLocalImage34} alt="Paytm" />
            <Image src={myLocalImage30} alt="Apple" />
            <Image src={myLocalImage31} alt="Nokia" />
            <Image src={myLocalImage32} alt="RealMe" />
            <Image src={myLocalImage33} alt="Vivo" />
            <Image src={myLocalImage34} alt="Paytm" />
            <Image src={myLocalImage30} alt="Apple" />
            <Image src={myLocalImage31} alt="Nokia" />
            <Image src={myLocalImage32} alt="RealMe" />
            <Image src={myLocalImage33} alt="Vivo" />
            <Image src={myLocalImage34} alt="Paytm" />
            <Image src={myLocalImage30} alt="Apple" />
            <Image src={myLocalImage31} alt="Nokia" />
            <Image src={myLocalImage32} alt="RealMe" />
            <Image src={myLocalImage33} alt="Vivo" />
            <Image src={myLocalImage34} alt="Paytm" />
            <Image src={myLocalImage30} alt="Apple" />
            <Image src={myLocalImage31} alt="Nokia" />
            <Image src={myLocalImage32} alt="RealMe" />
            <Image src={myLocalImage33} alt="Vivo" />
            <Image src={myLocalImage34} alt="Paytm" />
          </MarqueeContainer>
        </Item>
      </Stack>
    </div>
  );
}
