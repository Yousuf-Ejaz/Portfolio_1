import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Building
					<br />
					Elegant Web
					<br />
					Experiences
				</SectionTitle>
				<SectionText>
					Hi! I'm Yousuf, nice to meet you. Please take a look around!
					
				</SectionText>
				<Button onClick={props.handleClick}>About Me</Button>
			</LeftSection>
		</Section>
	</>
);

export default Hero;
