import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children?: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” MacBook Pro, M1 Pro, 16GB RAM (2021)">
            This just my perfect laptop
          </Tool>
          <Tool title="AOC 24” 144Hz Gaming Monitor"></Tool>
          <Tool title="Vorter VX8 Pro Keyboard"></Tool>
          <Tool title="Noir M1 Wireless Mouse"></Tool>
          <Tool title="Cheap $80 Chair"></Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Warp Terminal">
            I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use.
          </Tool>
          <Tool title="VSCode">What Else?</Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma"></Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
