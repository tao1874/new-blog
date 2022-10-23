import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import MaxWidthWrapper from './MaxWidthWrapper'
import UnstyledButton from './UnStyledButton'

export const siteTitle = 'Tao - Web Developer,Blogger'

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
              Dark
              <input type="checkbox" name="" id="" />
            </UnstyledButton>
          </div>
        </HeaderWrapper>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <SelfIntro>
          <div>
            <h2>曹国涛</h2>

            <p>前端工程师</p>
            <p>
              在这里分享我作为前端工程师的经验，以及一切我所学到的知识关于 html
              、css 、JavaScript
            </p>
          </div>
          <div>
            <Image
              src="/images/profile.png"
              alt="profile image"
              width={'30vw'}
              height="30vw"
            />
          </div>
        </SelfIntro>
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
  height: 60px;
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
`
const ListItem = styled.li`
  line-height: calc(1em + 0.625rem);
`

const NavItemLink = styled.a`
  padding: 10px;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 500;
`
const SelfIntro = styled.div`
  display: flex;
  justify-content: space-between;
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
