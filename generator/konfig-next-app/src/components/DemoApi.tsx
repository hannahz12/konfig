import { observer } from 'mobx-react'
import { useContext } from 'react'
import { Components } from 'react-markdown'
import { DemoStateContext } from './DemoMarkdown'
import { OperationsContext } from '@/pages/[org]/[portal]/docs/[[...doc]]'
import { Text } from '@mantine/core'
import { HttpMethodBadge } from './HttpMethodBadge'
import { DemoInlineLinkButton } from './DemoInlineLinkButton'

const _DemoApi: Components['a'] = ({
  node,
  className,
  children,
  siblingCount,
  ...props
}) => {
  const demoState = useContext(DemoStateContext)
  const operations = useContext(OperationsContext)
  if (!Array.isArray(children))
    return (
      <Text span color="red">
        Invalid API Node
      </Text>
    )
  const operationId = children[0]
  const operation = operations.find(
    (o) => o.operation.operationId === operationId
  )
  if (operation === undefined)
    return (
      <Text span color="red">
        Invalid operationId: {operationId}
      </Text>
    )
  const label = operation.operation.summary ?? operation.path
  const tag = operation.operation.tags?.[0]
  const id = operation.operation.operationId
  if (id === undefined) return null
  if (demoState === null) return null
  if (tag === undefined) return null
  const suffix = `/reference/${tag}/${id}`
  return (
    <DemoInlineLinkButton
      rightIcon={<HttpMethodBadge httpMethod={operation.method} />}
      label={label}
      href={
        demoState.omitOwnerAndRepo
          ? suffix
          : `/${demoState.owner}/${demoState.repo}${suffix}`
      }
      {...props}
    />
  )
}

export const DemoApi = observer(_DemoApi)
