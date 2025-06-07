import { createFileRoute, useLoaderData } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: RouteComponent,

  async loader(ctx) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log({ ctx });
    return {
      message: 'Hello from About! zz',
    };
  },
});

function RouteComponent() {
  const { message } = useLoaderData({ from: '/about' });
  return <div>{message}</div>;
}
