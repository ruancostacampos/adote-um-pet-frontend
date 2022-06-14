import { FooterContainer, SocialMediaList,
  SocialMediaItem, Logo } from "./Footer.style"



export default function Footer(){
    return (
        <FooterContainer>
            <SocialMediaList>
              
              <SocialMediaItem>
                <a href="https://github.com/ruancostacampos"
                  target="_blank"
                >
                  <Logo src="../images/github.svg" />
                  <span>/ruancostacampos</span>
                </a>
              </SocialMediaItem>

              <SocialMediaItem>
                <a href="https://www.linkedin.com/in/ruancostacampos/"
                  target="_blank"
                >
                  <Logo src="../images/linkedin.svg" />
                  <span>/ruancostacampos</span>
                </a>
              </SocialMediaItem>

              <SocialMediaItem>
                <a href="/pets/report">
                  <Logo src="../images/house.svg" />
                  <span>/painel_admin</span>
                </a>
              </SocialMediaItem>

            </SocialMediaList>

            <span className="hide">Desenvolvido na 3° turma do TreinaWeb Multi-stack</span>
        </FooterContainer>
    )
}