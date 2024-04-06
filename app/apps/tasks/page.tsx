import { Anchor, Container, Stack } from '@mantine/core';
import { KanbanBoard, PageHeader } from '@/components';
import { PATH_MAP } from '@/routes';

const items = [
  { title: 'Dashboard', href: PATH_MAP.public },
  { title: 'Apps', href: '#' },
  { title: 'Tasks', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Tasks() {
  return (
    <>
      <>
        <title>Tasks | DesignSparx</title>
      </>
      <Container fluid>
        <Stack gap="lg">
          <PageHeader title="Tasks" breadcrumbItems={items} />
          <KanbanBoard />
        </Stack>
      </Container>
    </>
  );
}

export default Tasks;
