import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import MaxWidthWrapper from './MaxWidthWrapper'
import UnstyledButton from './UnStyledButton'

export const siteTitle = 'Cao Guotao - Web Developer,Blogger'

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        ></link>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <MaxWidthWrapper>
        <HeaderWrapper>
          <Navigation>
            <List>
              <ListItem>
                <Link href="/" passHref>
                  <NavItemLink>Home</NavItemLink>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/articles" passHref>
                  <NavItemLink>Articles</NavItemLink>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/snippets" passHref>
                  <NavItemLink>Snippets</NavItemLink>
                </Link>
              </ListItem>
            </List>
          </Navigation>
          <div>
            <UnstyledButton>
              <input type="checkbox" name="" id="" />
            </UnstyledButton>
          </div>
        </HeaderWrapper>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <ProfileContainer>
          <ProfileContent>
            <h1>小明</h1>
            <p>前端工程师</p>
            <p>
              在这里分享我作为前端工程师的经验，以及任何我学到的关于 HTML 、CSS
              、JavaScript 的知识
            </p>
          </ProfileContent>
          <ProfileImage>
            <Image
              src="/images/profile.jpg"
              alt="profile image"
              layout="fill"
              className="rounded-full"
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </ProfileImage>
        </ProfileContainer>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <main className="main-container">{children}</main>
      </MaxWidthWrapper>

      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}

const HeaderWrapper = styled.header`
  padding-top: 2rem;
  padding-bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Navigation = styled.nav``
const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: -1rem;
`
const ListItem = styled.li`
  line-height: calc(1em + 0.625rem);
`

const NavItemLink = styled.a`
  padding: 1rem;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 500;
`

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ProfileContent = styled.div`
  margin-right: 2rem;
  & {
    > p:nth-child(2) {
      padding-bottom: 1rem;
    }
  }
`
const ProfileImage = styled.div`
  width: 100px;
  min-width: 100px;
  height: 100px;
  position: relative;
`

const NavItemLogo = styled(NavItemLink)`
  font-weight: bold;
  font-size: 1.5rem;
`

const MainContent = styled.main`
  max-width: 70ch;
  margin: 0 auto;
  outline: 1px solid pink;
  margin-top: 100px;
`
