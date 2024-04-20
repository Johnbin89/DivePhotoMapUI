'use client';

import {
  Avatar,
  Badge,
  Button,
  Divider,
  Flex,
  Group,
  Image,
  MantineColor,
  Paper,
  PaperProps,
  Progress,
  Stack,
  SimpleGrid,
  Text,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { Surface } from '@/components';
import { IconNotebook, IconShare } from '@tabler/icons-react';
import classes from './DiveCard.module.css';


type Status =
  | 'active'
  | 'inactive'
  | 'pending'
  | 'completed'
  | 'cancelled'
  | 'on hold'
  | 'in progress'
  | 'archived'
  | 'suspended'
  | 'expired'
  | string;

type StatusProps = {
  status: Status;
};

const StatusBadge = ({ status }: StatusProps) => {
  let color: MantineColor;

  switch (status) {
    case 'expired':
      color = 'dark';
      break;
    case 'active':
      color = 'green';
      break;
    case 'cancelled':
      color = 'gray';
      break;
    case 'archived':
      color = 'gray';
      break;
    case 'inactive':
      color = 'dark';
      break;
    case 'completed':
      color = 'green';
      break;
    case 'in progress':
      color = 'indigo';
      break;
    case 'pending':
      color = 'yellow.8';
      break;
    case 'suspended':
      color = 'red';
      break;
    case 'on hold':
      color = 'pink';
      break;
    default:
      color = 'gray';
  }

  return (
    <Badge color={color} variant="filled" radius="sm">
      {status}
    </Badge>
  );
};

type DiveCardProps = {
  id: string;
  title: string;
  description: string;
  status: Status;
  maxDivers: number;
  cost: number;
  link: string,
  newsletterLink: string
} & Omit<PaperProps, 'children'>;

const DiveCard = (props: DiveCardProps) => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const { id, title, description, status, maxDivers, cost, link, newsletterLink, ...others } =
    props;

  return (
    <Surface component={Paper} {...others}>
                <style jsx global>{`
        .mantine-Paper-root {
          background: ${colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1]};
        }
      `}</style>
        <Flex justify="space-between" align="center">
          <Flex align="center" gap="xs">
            <Text fz="md" fw={600} className={classes.tasksCompleted}>
              {title}
            </Text>
          </Flex>
          <StatusBadge status={status} />
        </Flex>
        <Divider />
        <Text fz="sm" lineClamp={3} className={classes.tasksCompleted}>
          {description}
        </Text>
        <Divider />
        <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs">
        <Text className={classes.tasksCompleted}>
          Divers:{' '}
          <Text span  fw={500} className={classes.tasksCompleted}>
            {maxDivers}
          </Text>
        </Text>
        <Text className={classes.tasksCompleted}>
          Cost:{' '}
          <Text span  fw={500} className={classes.tasksCompleted}>
            {cost}
          </Text>
        </Text>
    </SimpleGrid>

        <Divider />
        <Group gap="sm" style={{ marginTop: '8px'}}>
        <Button
            size="compact-md"
            variant="subtle"
            leftSection={<IconNotebook size={14} />}
            component="a"
            href="https://mantine.dev"
          >
            View
          </Button>
          <Button
            size="compact-md"
            variant="subtle"
            leftSection={<IconShare size={14} />}
            component="a"
            href="https://mantine.dev"
          >
            Share
          </Button>

        </Group>
    </Surface>
  );
};

export default DiveCard;
