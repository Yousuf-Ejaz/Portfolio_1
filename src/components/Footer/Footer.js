import React from "react";
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Email Me at</LinkTitle>
					<LinkItem href="mailto:ejazahmadyousuf2@gmail.com">
						ejazahmadyousuf2@gmail.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Innovating one project at a time</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href="https://github.com/Yousuf-Ejaz">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.linkedin.com/in/yousuf-ejaz-ahmad-1833881b7/">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://twitter.com/0xYousuf">
						<AiFillTwitterCircle size="3rem" />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
