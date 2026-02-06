import { useTranslation } from 'react-i18next';

import { useNavigate } from 'react-router';

import { IconMail, IconUser } from '@tabler/icons-react';

import {
  Avatar,
  Box,
  Button,
  Card,
  Carousel,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  Text,
  TextArea,
  TextField,
} from '@pittorica/react';

import contactUsHero from '~/images/contact-us.webp';
import footerHero from '~/images/footer.webp';
import imgAttrezzi from '~/images/galleria/attrezzi.webp';
import imgCucire from '~/images/galleria/cucire.webp';
import imgLana from '~/images/galleria/lana.webp';
import imgTela from '~/images/galleria/tela.webp';
import topHero from '~/images/landing-top-hero.webp';
import logo from '~/images/logo/logo.webp';

export default function IndexRoute() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Flex direction="column" gap="9">
        <Box
          id="home"
          style={{
            position: 'relative',
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, transparent 100%), url(${topHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px',
          }}
        >
          <Container maxWidth="md" style={{ position: 'relative', zIndex: 1 }}>
            <Flex
              gap="9"
              direction="column"
              justify="center"
              align="center"
              style={{ minHeight: '60vh' }}
            >
              <Heading
                align="center"
                color="white"
                size={{ initial: '8', md: '9' }}
                style={{ textShadow: '1px 1px 0px #000000' }}
              >
                {t('top.title')}
              </Heading>

              <Heading
                color="white"
                align="center"
                size={{ initial: '6', md: '8' }}
                style={{ textShadow: '1px 1px 0px #000000' }}
              >
                {t('top.subtitle')}
              </Heading>

              <Flex gap="6" align="center" justify="center">
                <Button
                  color="success"
                  onClick={() => navigate('/#contact-us')}
                >
                  {t('top.cta.primary')}
                </Button>
                <Button color="info" onClick={() => navigate('/#about')}>
                  {t('top.cta.secondary')}
                </Button>
              </Flex>
            </Flex>
          </Container>
        </Box>

        <Box id="about">
          <Container maxWidth="md">
            <Flex direction="column" gap="6">
              <Heading size={{ initial: '6', md: '8' }}>
                {t('about.title')}
              </Heading>

              <Carousel.Root>
                <Carousel.Item>
                  <img src={imgAttrezzi} alt="Attrezzi" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={imgCucire} alt="Cucire" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={imgLana} alt="Lana" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={imgTela} alt="Tela" />
                </Carousel.Item>
              </Carousel.Root>

              {Array.isArray(t('about.sections', { returnObjects: true })) &&
                (t('about.sections', { returnObjects: true }) as string[]).map(
                  (section, index) => (
                    // eslint-disable-next-line @eslint-react/no-array-index-key
                    <Text key={`about-section-${index}`}>{section}</Text>
                  )
                )}
            </Flex>
          </Container>
        </Box>

        <Box
          id="contact-us"
          style={{
            position: 'relative',
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, transparent 100%), url(${contactUsHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          }}
        >
          <Container maxWidth="xs">
            <Flex
              direction="column"
              align="center"
              justify="center"
              gap="6"
              style={{ minHeight: '100vh' }}
            >
              <Heading
                color="white"
                size={{ initial: '6', md: '8' }}
                style={{ textShadow: '1px 1px 0px #000000' }}
              >
                {t('contact-us.title')}
              </Heading>

              <Card translucent style={{ width: '100%' }} p="4">
                <Flex
                  direction="column"
                  align="stretch"
                  justify="center"
                  gap="4"
                >
                  <TextField.Root label={t('contact-us.form.name.label')}>
                    <TextField.Slot>
                      <IconUser size={16} />
                    </TextField.Slot>
                    <TextField.Input
                      placeholder="Davide Di Criscito"
                      type="text"
                    />
                  </TextField.Root>

                  <TextField.Root label={t('contact-us.form.email.label')}>
                    <TextField.Slot>
                      <IconMail size={16} />
                    </TextField.Slot>
                    <TextField.Input
                      placeholder="mail@example.com"
                      type="email"
                    />
                  </TextField.Root>

                  <TextArea.Root label={t('contact-us.form.message.label')}>
                    <TextArea.Content placeholder="..." />
                  </TextArea.Root>

                  <Flex direction="column" align="end" justify="end">
                    <Button variant="elevated">
                      {t('contact-us.form.submit')}
                    </Button>
                  </Flex>
                </Flex>
              </Card>
            </Flex>
          </Container>
        </Box>
      </Flex>

      <Box
        id="footer"
        pt="9"
        pb="9"
        style={{
          position: 'relative',
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, transparent 100%), url(${footerHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      >
        <Container maxWidth="md" style={{ position: 'relative', zIndex: 1 }}>
          <Card translucent style={{ width: '100%' }} p="4">
            <Flex direction="column" align="center" justify="center" gap="4">
              <Avatar src={logo} size="9" fallback="t" />
              <Heading size={{ initial: '6', md: '8' }}>
                {t('footer.title')}
              </Heading>
              <Heading size="4">
                powered by{' '}
                <Link
                  href="https://dcdavidev.me"
                  target="_blank"
                  style={{ fontFamily: 'var(--pittorica-heading)' }}
                >
                  @dcdavidev
                </Link>
                .
              </Heading>

              <Divider variant="wave" />

              <Flex direction="column" gap="4" align="center" justify="center">
                <Link href="/#home">{t('top.href')}</Link>
                <Link href="/#about">{t('about.href')}</Link>
                <Link href="/#contact-us">{t('contact-us.href')}</Link>
              </Flex>
            </Flex>
          </Card>
        </Container>
      </Box>
    </>
  );
}
