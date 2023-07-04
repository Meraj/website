import {
  Box,
  Text,
  Button,
  Flex,
  Heading,
  Separator,
  Theme,
  Slider,
  Select,
  Switch,
  Grid,
  IconButton,
} from '@radix-ui/themes';
import { Label } from '@radix-ui/react-label';
import { Card } from './Card';
import { SpeakerLoudIcon, SpeakerOffIcon, SpeakerQuietIcon } from '@radix-ui/react-icons';

export const ExampleMusicApp = () => (
  <Flex align="center" gap="6">
    <Flex shrink="0" gap="6" direction="column" style={{ width: 416 }}>
      <Card size="3">
        <Box height="7">
          <Flex align="center" justify="between">
            <Heading as="h3" size="5" trim="both">
              Queue
            </Heading>

            <Flex gap="4">
              <Button m="-3" size="2" variant="ghost">
                Clear
              </Button>
              <Button m="-3" size="2" variant="ghost">
                Repeat
              </Button>
            </Flex>
          </Flex>
        </Box>

        <Flex direction="column" gap="4">
          {songs.slice(0, 4).map((song, i) => (
            <Flex align="center" gap="3" key={song.name}>
              <Box asChild width="8" height="8">
                <img src={song.cover} style={{ objectFit: 'cover', borderRadius: 'var(--br-2)' }} />
              </Box>
              <Box grow="1" width="0">
                <Text
                  as="div"
                  size="2"
                  style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
                >
                  {song.name}
                </Text>
                <Text
                  as="div"
                  size="1"
                  color="gray"
                  style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
                >
                  {song.artist} – {song.album}
                </Text>
              </Box>
              <Box>
                <Text as="div" size="2" color="gray">
                  {song.length}
                </Text>
              </Box>
            </Flex>
          ))}
        </Flex>
      </Card>

      <Card size="3">
        <Box height="7">
          <Flex justify="between" align="center">
            <Heading as="h3" size="5" trim="both">
              Sound
            </Heading>

            <Text size="2" color="gray">
              Yamaha THR
            </Text>
          </Flex>
        </Box>

        <Flex gap="2" align="center" mt="2" mb="5">
          <SpeakerQuietIcon color="var(--gray-a9)" />
          <Box grow="1">
            <Slider radius="full" defaultValue={[80]} />
          </Box>
          <SpeakerLoudIcon color="var(--gray-a9)" />
        </Flex>

        <Grid columns="4">
          <Flex direction="column" gap="1" align="center" asChild>
            <Label>
              <IconButton radius="full" variant="solid">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentcolor"
                  width="16"
                  height="16"
                >
                  <path d="M 10.5 1 C 10.222656 1 10 1.222656 10 1.5 L 10 13.5 C 10 13.777344 10.222656 14 10.5 14 L 12.5 14 C 12.777344 14 13 13.777344 13 13.5 L 13 1.5 C 13 1.222656 12.777344 1 12.5 1 Z M 11 2 L 12 2 L 12 13 L 11 13 Z M 6.5 5 C 6.222656 5 6 5.222656 6 5.5 L 6 13.5 C 6 13.777344 6.222656 14 6.5 14 L 8.5 14 C 8.777344 14 9 13.777344 9 13.5 L 9 5.5 C 9 5.222656 8.777344 5 8.5 5 Z M 7 6 L 8 6 L 8 13 L 7 13 Z M 2.5 8 C 2.222656 8 2 8.222656 2 8.5 L 2 13.5 C 2 13.777344 2.222656 14 2.5 14 L 4.5 14 C 4.777344 14 5 13.777344 5 13.5 L 5 8.5 C 5 8.222656 4.777344 8 4.5 8 Z M 3 9 L 4 9 L 4 13 L 3 13 Z" />
                </svg>
              </IconButton>
              <Text align="center" weight="bold" size="2">
                Normalize
              </Text>
              <Text align="center" color="gray" size="1">
                On
              </Text>
            </Label>
          </Flex>

          <Flex direction="column" gap="1" align="center" asChild>
            <Label>
              <IconButton radius="full" variant="solid">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentcolor"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path d="M 2 2 L 2 4 L 1.5 4 C 1.222656 4 1 4.222656 1 4.5 L 1 6.5 C 1 6.777344 1.222656 7 1.5 7 L 2 7 L 2 14 L 3 14 L 3 7 L 3.5 7 C 3.777344 7 4 6.777344 4 6.5 L 4 4.5 C 4 4.222656 3.777344 4 3.5 4 L 3 4 L 3 2 Z M 7 2 L 7 10 L 6.5 10 C 6.222656 10 6 10.222656 6 10.5 L 6 12.5 C 6 12.777344 6.222656 13 6.5 13 L 7 13 L 7 14 L 8 14 L 8 13 L 8.5 13 C 8.777344 13 9 12.777344 9 12.5 L 9 10.5 C 9 10.222656 8.777344 10 8.5 10 L 8 10 L 8 2 Z M 12 2 L 12 6 L 11.5 6 C 11.222656 6 11 6.222656 11 6.5 L 11 8.5 C 11 8.777344 11.222656 9 11.5 9 L 12 9 L 12 14 L 13 14 L 13 9 L 13.5 9 C 13.777344 9 14 8.777344 14 8.5 L 14 6.5 C 14 6.222656 13.777344 6 13.5 6 L 13 6 L 13 2 Z M 2 5 L 3 5 L 3 6 L 2 6 Z M 12 7 L 13 7 L 13 8 L 12 8 Z M 7 11 L 8 11 L 8 12 L 7 12 Z" />
                </svg>
              </IconButton>
              <Text align="center" weight="bold" size="2">
                Equalizer
              </Text>
              <Text align="center" color="gray" size="1">
                On
              </Text>
            </Label>
          </Flex>

          <Flex direction="column" gap="1" align="center" asChild>
            <Label>
              <IconButton radius="full" variant="soft">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  fill="currentcolor"
                >
                  <path d="M 8 4 C 5.875 4 3.949219 4.339844 2.511719 4.914063 C 1.792969 5.203125 1.191406 5.546875 0.746094 5.96875 C 0.300781 6.390625 0 6.917969 0 7.5 C 0 8.082031 0.300781 8.609375 0.746094 9.03125 C 1.191406 9.453125 1.792969 9.796875 2.511719 10.085938 C 3.71875 10.570313 5.277344 10.871094 7 10.957031 L 7 13 L 9.5 10.5 L 7 8 L 7 9.960938 C 5.390625 9.867188 3.941406 9.578125 2.882813 9.15625 C 2.246094 8.902344 1.746094 8.601563 1.433594 8.304688 C 1.121094 8.007813 1 7.746094 1 7.5 C 1 7.253906 1.121094 6.992188 1.433594 6.695313 C 1.746094 6.398438 2.246094 6.097656 2.882813 5.84375 C 4.160156 5.332031 5.984375 5 8 5 C 10.015625 5 11.839844 5.332031 13.117188 5.84375 C 13.753906 6.097656 14.253906 6.398438 14.566406 6.695313 C 14.878906 6.992188 15 7.253906 15 7.5 C 15 7.839844 14.746094 8.242188 14.121094 8.648438 C 13.554688 9.015625 12.71875 9.34375 11.722656 9.582031 C 11.488281 9.640625 11.257813 9.699219 11 9.742188 L 11 10.761719 C 11.210938 10.726563 11.402344 10.679688 11.601563 10.636719 L 11.605469 10.640625 C 11.6875 10.625 11.761719 10.601563 11.84375 10.582031 C 11.894531 10.570313 11.949219 10.5625 12 10.550781 L 12 10.546875 C 13.058594 10.289063 13.972656 9.9375 14.664063 9.488281 C 15.445313 8.980469 16 8.308594 16 7.5 C 16 6.917969 15.699219 6.390625 15.253906 5.96875 C 14.808594 5.546875 14.207031 5.203125 13.488281 4.914063 C 12.050781 4.339844 10.125 4 8 4 Z" />
                </svg>
              </IconButton>
              <Text align="center" weight="bold" size="2">
                3D Audio
              </Text>
              <Text align="center" color="gray" size="1">
                Off
              </Text>
            </Label>
          </Flex>

          <Flex direction="column" gap="1" align="center" asChild>
            <Label>
              <IconButton radius="full" variant="soft">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  fill="currentcolor"
                >
                  <path d="M 2.5 2 A 0.50005 0.50005 0 0 0 2 2.5 L 2 13.5 A 0.50005 0.50005 0 0 0 2.5 14 L 13.5 14 A 0.50005 0.50005 0 0 0 14 13.5 L 14 2.5 A 0.50005 0.50005 0 0 0 13.5 2 L 2.5 2 z M 3.7070312 3 L 12.292969 3 L 8 7.2929688 L 3.7070312 3 z M 3 3.7070312 L 7.2929688 8 L 3 12.292969 L 3 3.7070312 z M 13 3.7070312 L 13 12.292969 L 8.7070312 8 L 13 3.7070312 z M 8 8.7070312 L 12.292969 13 L 3.7070312 13 L 8 8.7070312 z" />
                </svg>
              </IconButton>
              <Text align="center" weight="bold" size="2">
                Cross-Fade
              </Text>
              <Text align="center" color="gray" size="1">
                Off
              </Text>
            </Label>
          </Flex>
        </Grid>
      </Card>

      <Card size="3">
        <Box height="7">
          <Flex justify="between" align="center">
            <Flex align="center" gap="3">
              <Heading as="h3" size="5" trim="both">
                Equalizer
              </Heading>

              <Switch defaultChecked radius="full" size="1" />
            </Flex>

            <Button m="-3" size="2" variant="ghost">
              Reset
            </Button>
          </Flex>
        </Box>

        <Box position="relative" mt="2">
          <Flex direction="column" gap="4" py="4" position="absolute" left="0" right="0">
            <Box style={{ borderTop: '1px dotted var(--gray-a5)', marginTop: -1 }} />
            <Box style={{ borderTop: '1px dotted var(--gray-a5)', marginTop: -1 }} />
            <Box style={{ borderTop: '1px dotted var(--gray-a5)', marginTop: -1 }} />
            <Box style={{ borderTop: '1px solid var(--gray-a5)', marginTop: -1 }} />
            <Box style={{ borderTop: '1px dotted var(--gray-a5)', marginTop: -1 }} />
            <Box style={{ borderTop: '1px dotted var(--gray-a5)', marginTop: -1 }} />
            <Box style={{ borderTop: '1px dotted var(--gray-a5)', marginTop: -1 }} />
          </Flex>

          <Flex shrink="0" grow="1" justify="between" position="relative">
            {[
              { frequency: '32', value: 75 },
              { frequency: '64', value: 73 },
              { frequency: '125', value: 70 },
              { frequency: '250', value: 65 },
              { frequency: '500', value: 52 },
              { frequency: '1K', value: 50 },
              { frequency: '2K', value: 56 },
              { frequency: '4K', value: 60 },
              { frequency: '8K', value: 65 },
              { frequency: '16K', value: 68 },
            ].map((slider) => (
              <Flex direction="column" align="center" gap="2" width="5">
                <Slider
                  size="2"
                  radius="small"
                  key={slider.frequency}
                  color="gray"
                  variant="soft"
                  defaultValue={[slider.value]}
                  orientation="vertical"
                  style={{ height: 128 }}
                />
                <Text size="1">{slider.frequency}</Text>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Card>

      <Card size="3">
        <Box height="7">
          <Flex align="center" justify="between">
            <Heading as="h3" size="5" trim="both">
              History
            </Heading>

            <Flex gap="4">
              <Button m="-3" size="2" variant="ghost">
                Clear
              </Button>
            </Flex>
          </Flex>
        </Box>

        <Flex direction="column" gap="4">
          {songs.slice(5).map((song, i) => (
            <Flex align="center" gap="3" key={song.name}>
              <Box asChild width="8" height="8">
                <img src={song.cover} style={{ objectFit: 'cover', borderRadius: 'var(--br-2)' }} />
              </Box>
              <Box grow="1" width="0">
                <Text
                  as="div"
                  size="2"
                  style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
                >
                  {song.name}
                </Text>
                <Text
                  as="div"
                  size="1"
                  color="gray"
                  style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
                >
                  {song.artist} – {song.album}
                </Text>
              </Box>
              <Box>
                <Text as="div" size="2" color="gray">
                  {song.length}
                </Text>
              </Box>
            </Flex>
          ))}
        </Flex>
      </Card>
    </Flex>
  </Flex>
);

const songs = [
  {
    name: 'The Less I Know the Better',
    artist: 'Tame Impala',
    album: 'Currents',
    length: '3:39',
    cover: 'https://i.pinimg.com/originals/68/d1/26/68d126de72d2dead4920b9e09fa6af8b.jpg',
  },
  {
    name: 'Pieces',
    artist: 'Villagers',
    album: 'Becoming a Jackal',
    length: '5:25',
    cover: 'https://www.normanrecords.com/artwork/large/99/116349-villagers-becoming-a-jackal.jpg',
  },
  {
    name: 'Cola',
    artist: 'Arlo Parks',
    album: 'Super Sad Generation',
    length: '3:50',
    cover: 'https://images.genius.com/be8d58aa34e4c0acb093c4833101a773.1000x1000x1.png',
  },
  {
    name: 'Self',
    artist: 'noname',
    album: 'Room 25',
    length: '1:35',
    cover: 'https://f4.bcbits.com/img/a1836574169_10.jpg',
  },
  {
    name: 'Left Hand Free',
    artist: 'Alt-J',
    album: 'This Is All Yours',
    length: '2:54',
    cover: 'https://i.scdn.co/image/ab67616d0000b27311b3df35e2e46d91f585afd9',
  },
  {
    name: 'Last',
    artist: 'Nine Inch Nails',
    album: 'Broken',
    length: '4:45',
    cover: 'https://i.scdn.co/image/ab67616d0000b273f1234cfed5f06fd58e76b06f',
  },
  {
    name: '13LACK 13ALLOONZ (feat. Twelve’len & GoldLink)',
    artist: 'Denzel Curry',
    album: 'TA13OO',
    length: '3:31',
    cover:
      'http://is5.mzstatic.com/image/thumb/Music115/v4/be/83/a0/be83a08f-171f-022c-d6f3-cbf5110492a5/source/100000x100000-999.jpg',
  },
  {
    name: 'Blaxploitation',
    artist: 'noname',
    album: 'Room 25',
    length: '2:13',
    cover: 'https://f4.bcbits.com/img/a1836574169_10.jpg',
  },
  {
    name: 'Trippy (feat. J. Cole)',
    artist: 'Anderson .Paak',
    album: 'Oxnard',
    length: '5:24',
    cover: 'https://media.pitchfork.com/photos/5be9b09fa1b4df7cd2613d29/1:1/w_600/oxnard.jpg',
  },
  {
    name: 'Nightclubbing',
    artist: 'Iggy Pop',
    album: 'The Idiot',
    length: '4:16',
    cover:
      'https://fiu-original.b-cdn.net/fontsinuse.com/use-images/161/161513/161513.jpeg?filename=Iggy%20Pop%20%E2%80%93%20The%20Idiot.jpg',
  },
  {
    name: 'Heaven Beside You',
    artist: 'Alice in Chains',
    album: 'Alice in Chains',
    length: '5:28',
    cover: 'https://e.snmc.io/i/1200/s/cf90f9e23c6b5bd2a18df298269028d4/1677357',
  },
  {
    name: 'Night After Night',
    artist: 'Laura Marling',
    album: 'A Creature I Don’t Know',
    length: '5:08',
    cover: 'https://media.pitchfork.com/photos/5929b0e5b1335d7bf169a1be/1:1/w_600/bae77272.jpg',
  },
  {
    name: 'HEAVN',
    artist: 'Jamila Woods',
    album: 'HEAVN',
    length: '4:23',
    cover:
      'https://i.discogs.com/trqSgeVgjiKjDE2pJloIHKL5R6nEJkq8Q-yZQiCEL58/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwOTMy/NzkyLTE1MDY3NTgw/MzItNzU3NS5qcGVn.jpeg',
  },
];
