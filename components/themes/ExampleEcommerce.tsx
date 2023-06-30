import {
  Badge,
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  RadioGroup,
  Select,
  Separator,
  Strong,
  Text,
  ThemeConfig,
} from '@radix-ui/themes';
import { Card } from './Card';
import {
  BookmarkIcon,
  Cross2Icon,
  HeartFilledIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
} from '@radix-ui/react-icons';
import { Label } from '@radix-ui/react-label';

export const ExampleEcommerce = () => (
  <Flex align="center" gap="6">
    <Flex shrink="0" gap="6" direction="column" style={{ width: 304 }}>
      <Card size="1">
        <Flex mb="2">
          <img
            src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=424&q=80"
            width="280"
            height="212"
            style={{ borderRadius: 'var(--br-1)' }}
          />
        </Flex>

        <Flex align="center" justify="between" gap="3">
          <Box>
            <Text color="gray">
              <Link size="2" weight="bold">
                Back to basics
              </Link>
            </Text>

            <Text size="2" color="gray">
              Simple and versatile
            </Text>
          </Box>
          <Box shrink="0">
            <Button tabIndex={-1} size="2" variant="subtle" color="gray" highContrast>
              Shop now
            </Button>
          </Box>
        </Flex>
      </Card>

      <Card size="1">
        <Flex mb="2" position="relative">
          <img
            width="280"
            height="270"
            src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=540&q=80"
            style={{ borderRadius: 'var(--br-1)' }}
          />

          <Box
            className="light-theme"
            position="absolute"
            bottom="0"
            right="0"
            m="2"
            style={{ background: 'none' }}
          >
            <IconButton color="gray" variant="surface">
              <BookmarkIcon width="16" height="16" />
            </IconButton>
          </Box>
        </Flex>

        <Flex align="end" justify="between" mb="2">
          <Box>
            <Text size="2" color="gray" mb="1">
              <Link>Footwear</Link>
            </Text>

            <Heading size="3">Sneakers #12</Heading>
          </Box>

          <Text size="6" weight="bold">
            $149
          </Text>
        </Flex>

        <Text size="2" color="gray" mb="4">
          Love at the first sight for enthusiasts seeking a fresh and whimsical style.
        </Text>

        <Box style={{ marginTop: -1 }}>
          <Separator size="4" my="4" />
        </Box>

        <Flex gap="2" align="end">
          <Flex direction="column" grow="1">
            <Label asChild>
              <Text size="1" color="gray" mb="1">
                Color
              </Text>
            </Label>

            <Select.Root triggerVariant="subtle" defaultValue="Pastel" size="2">
              <Select.Item value="Pastel">Pastel</Select.Item>
              <Select.Item value="Bright">Bright</Select.Item>
            </Select.Root>
          </Flex>

          <Flex direction="column">
            <Label asChild>
              <Text size="1" color="gray" mb="1">
                Size
              </Text>
            </Label>

            <Select.Root triggerVariant="subtle" defaultValue="8" size="2">
              {Array.from({ length: 12 }, (_, i) => (
                <Select.Item value={String(i * 0.5 + 5)}>{i * 0.5 + 5}</Select.Item>
              ))}
            </Select.Root>
          </Flex>

          <Button tabIndex={-1} size="2" variant="subtle" color="gray" highContrast>
            Add to cart
          </Button>
        </Flex>
      </Card>

      <Card size="1">
        <Flex direction="column" style={{ gap: 20 }}>
          <Box>
            <Text size="2" weight="bold" mb="2">
              Delivery
            </Text>

            <Grid gap="1" columns="2">
              <Button variant="subtle" highContrast style={{ fontWeight: 400 }}>
                Tomorrow
              </Button>
              <Button variant="subtle" highContrast style={{ fontWeight: 400 }}>
                Within 3 days
              </Button>
            </Grid>
          </Box>

          <Box>
            <Text size="2" weight="bold" mb="2">
              Size
            </Text>

            <Grid gap="1" columns="5">
              <Button variant="subtle" highContrast style={{ fontWeight: 400 }}>
                5.5
              </Button>
              <Button variant="subtle" highContrast style={{ fontWeight: 400 }}>
                6
              </Button>
              <Button variant="subtle" highContrast style={{ fontWeight: 400 }}>
                6.5
              </Button>
              <Button variant="subtle" highContrast style={{ fontWeight: 400 }}>
                7
              </Button>
              <Button variant="subtle" highContrast style={{ fontWeight: 400 }}>
                7.5
              </Button>
              <Button variant="subtle" highContrast style={{ fontWeight: 400 }}>
                8
              </Button>
              <Button variant="subtle" highContrast style={{ fontWeight: 400 }}>
                8.5
              </Button>
              <Button variant="solid" highContrast>
                9
              </Button>
              <Button variant="subtle" highContrast disabled style={{ fontWeight: 400 }}>
                9.5
              </Button>
              <Button variant="subtle" highContrast style={{ fontWeight: 400 }}>
                10
              </Button>
            </Grid>
          </Box>

          <Box>
            <Text size="2" weight="bold" mb="2">
              Material
            </Text>

            <Grid gap="1" columns="4">
              <Button variant="subtle" highContrast style={{ fontWeight: 400 }}>
                Leather
              </Button>
              <Button variant="subtle" highContrast style={{ fontWeight: 400 }}>
                Suede
              </Button>
              <Button variant="subtle" highContrast style={{ fontWeight: 400 }}>
                Mesh
              </Button>
              <Button variant="subtle" highContrast style={{ fontWeight: 400 }}>
                Canvas
              </Button>
            </Grid>
          </Box>

          <Box>
            <Text size="2" weight="bold" mb="2">
              Color
            </Text>

            <Grid gap="1" columns="3">
              {[
                { name: 'White', value: 'white' },
                { name: 'Gray', value: 'var(--gray-9)' },
                { name: 'Black', value: '#1B1B18' },
                { name: 'Red', value: 'var(--red-9)' },
                { name: 'Pink', value: 'var(--pink-8)' },
                { name: 'Violet', value: 'var(--violet-9)' },
                { name: 'Blue', value: 'var(--blue-9)' },
                { name: 'Green', value: 'var(--teal-9)' },
                { name: 'Brown', value: 'var(--brown-9)' },
              ].map((color) => (
                <Button
                  key={color.name}
                  variant="subtle"
                  highContrast
                  style={{ fontWeight: 400, justifyContent: 'start' }}
                >
                  <Box
                    shrink="0"
                    width="4"
                    height="4"
                    style={{
                      background: color.value,
                      borderRadius: 'var(--br-1)',
                      boxShadow: 'inset 0 0 0 1px rgba(90, 90, 90, 0.15)',
                    }}
                  />
                  {color.name}
                </Button>
              ))}
            </Grid>
          </Box>
        </Flex>
      </Card>

      <Card size="1">
        <Box height="4" mb="4">
          <Heading size="3">Shopping cart</Heading>
        </Box>

        <Flex direction="column" gap="2">
          {[
            {
              name: 'Poncho #4',
              url:
                'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80&crop=entropy',
              caption: 'Size M',
              count: '1',
              price: '$79',
            },
            {
              name: 'Jeans #8',
              url:
                'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80&crop=entropy',
              caption: 'Size 30',
              count: '2',
              price: '$118',
            },
            {
              name: 'Sneakers #14',
              url:
                'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80&crop=center',
              caption: 'Size 8',
              count: '1',
              price: '$116',
            },
          ].map((item) => (
            <Flex gap="4" align="center" justify="between" key={item.url}>
              <Flex grow="1" align="center" gap="2">
                <img
                  src={item.url}
                  style={{ borderRadius: 'var(--br-1)' }}
                  width="32"
                  height="32"
                />
                <Box>
                  <Text color="gray">
                    <Link size="2" weight="bold">
                      {item.name}
                    </Link>
                  </Text>
                  <Text color="gray" size="1">
                    {item.caption}
                  </Text>
                </Box>
              </Flex>

              <Flex direction="column" width="8">
                <Select.Root defaultValue={item.count} size="1">
                  {Array.from({ length: 9 }, (_, i) => (
                    <Select.Item value={String(i + 1)}>{i + 1}</Select.Item>
                  ))}
                </Select.Root>
              </Flex>

              <Flex direction="column" width="6">
                <Text size="2" weight="bold" align="right">
                  {item.price}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Flex>

        <Box style={{ marginTop: -1 }}>
          <Separator size="4" my="4" />
        </Box>

        <Flex align="center" justify="between" mt="4">
          <Text size="2">
            Total <Strong>$313</Strong>
          </Text>

          <Button tabIndex={-1} size="2" variant="subtle" color="gray" highContrast>
            Go to checkout
          </Button>
        </Flex>
      </Card>
    </Flex>

    <Flex shrink="0" gap="6" direction="column" style={{ width: 304 }}>
      <Card size="1">
        <Flex mb="2" position="relative">
          <img
            width="280"
            height="270"
            src="https://images.unsplash.com/photo-1577210897949-1f56f943bf82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=540&q=80&crop=bottom"
            style={{ borderRadius: 'var(--br-1)' }}
          />

          <Box className="light-theme" position="absolute" bottom="0" right="0" m="2">
            <IconButton color="gray" variant="surface">
              <BookmarkIcon width="16" height="16" />
            </IconButton>
          </Box>
        </Flex>

        <Flex align="end" justify="between" mb="2">
          <Box>
            <Text size="2" color="gray" mb="1">
              <Link>Pants and jeans</Link>
            </Text>

            <Heading size="3">Jeans #7</Heading>
          </Box>

          <Text size="6" weight="bold">
            $149
          </Text>
        </Flex>

        <Text size="2" color="gray" mb="4">
          Jeans with a sense of nostalgia, as if they carry whispered tales of past adventures.
        </Text>

        <Box style={{ marginTop: -1 }}>
          <Separator size="4" my="4" />
        </Box>

        <Flex gap="2" align="end">
          <Flex direction="column" grow="1">
            <Label asChild>
              <Text size="1" color="gray" mb="1">
                Color
              </Text>
            </Label>

            <Select.Root triggerVariant="subtle" defaultValue="Lighter" size="2">
              <Select.Item value="Lighter">Lighter</Select.Item>
              <Select.Item value="Darker">Darker</Select.Item>
            </Select.Root>
          </Flex>

          <Flex direction="column">
            <Label asChild>
              <Text size="1" color="gray" mb="1">
                Size
              </Text>
            </Label>

            <Select.Root triggerVariant="subtle" defaultValue="30" size="2">
              {Array.from({ length: 17 }, (_, i) => (
                <Select.Item value={String(i + 24)}>{i + 24}</Select.Item>
              ))}
            </Select.Root>
          </Flex>

          <Button tabIndex={-1} size="2" variant="subtle" color="gray" highContrast>
            Add to cart
          </Button>
        </Flex>
      </Card>

      <Card size="1">
        <Flex mb="2">
          <img
            src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=424&q=80"
            width="280"
            height="212"
            style={{ borderRadius: 'var(--br-1)' }}
          />
        </Flex>

        <Flex align="center" justify="between" gap="3">
          <Box>
            <Text color="gray">
              <Link size="2" weight="bold">
                Unexpected pairings
              </Link>
            </Text>

            <Text size="2" color="gray">
              Break the fashion norms
            </Text>
          </Box>
          <Box shrink="0">
            <Button tabIndex={-1} size="2" variant="subtle" color="gray" highContrast>
              Shop now
            </Button>
          </Box>
        </Flex>
      </Card>

      <Card size="1">
        <Flex mb="3">
          <Heading size="3">Delivery</Heading>
        </Flex>

        <Box position="absolute" right="0" top="0" m="2">
          <Badge size="1" color="amber">
            Guaranteed
          </Badge>
        </Box>

        <Box mb="4">
          <Text size="2" weight="bold" mb="1">
            Tomorrow
          </Text>
          <Text size="2">12:00 pm – 2:00 pm</Text>
        </Box>

        <Box mb="4">
          <Text size="2" weight="bold" mb="1">
            Luna Rodriguez
          </Text>
          <Text size="2">9876 Maple Avenue</Text>
          <Text size="2">Cityville, WA 54321</Text>
        </Box>

        <Flex mb="4">
          <img
            width="280"
            height="218"
            src="https://workos.imgix.net/images/bc04b345-f225-488d-8a46-1811096d0c3b.png?auto=format&fit=clip&q=90&w=840&h=654"
            style={{ borderRadius: 'var(--br-1)' }}
          />
        </Flex>

        <Flex gap="2" justify="end">
          <Button tabIndex={-1} size="2" variant="subtle" color="gray" highContrast>
            Edit
          </Button>
          <Button tabIndex={-1} size="2" variant="subtle" color="gray" highContrast>
            Confirm
          </Button>
        </Flex>
      </Card>

      <Card size="1">
        <Box height="6">
          <Flex align="center" justify="between">
            <Heading size="3">Bookmarks</Heading>
            <Button size="1" variant="ghost">
              Buy all
            </Button>
          </Flex>
        </Box>

        <Grid gapX="2" gapY="4" columns="2">
          {[
            {
              name: 'Jeans #8',
              url:
                'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=272&h=272&q=80&crop=entropy',
              price: '$118',
            },

            {
              name: 'Jacket #3',
              url:
                'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&crop=entropy&w=272&h=272&q=80',
              price: '$49',
            },
            {
              name: 'Pants #10',
              url:
                'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=272&h=272&q=80',
              price: '$32',
            },
            {
              name: 'Shirt #11',
              url:
                'https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=272&h=272&q=80',
              price: '$39',
            },
          ].map((item) => (
            <Box key={item.url}>
              <Flex mb="2">
                <img
                  src={item.url}
                  style={{ borderRadius: 'var(--br-1)' }}
                  width="136"
                  height="136"
                />
              </Flex>

              <Text size="2" color="gray">
                <Link weight="bold">{item.name}</Link>, {item.price}
              </Text>
            </Box>
          ))}
        </Grid>
      </Card>
    </Flex>
  </Flex>
);
