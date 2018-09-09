import React from 'react';
import {
  Card,
  Label
} from 'semantic-ui-react';

import './components.css';

function TableSummaryLabels(props) {
  return (
    <Label.Group>
      <Label circular>{props.table.entries.length}</Label>
    </Label.Group>
  );
}

function TableSummaryCard(props) {
  return (
    <Card link>
      <Card.Content>
        <Card.Header>{props.table.name}</Card.Header>
        <Card.Meta>{props.table.code}</Card.Meta>
        <Card.Description>{props.table.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <TableSummaryLabels table={this.props.table} />
      </Card.Content>
    </Card>
  );
}

function TableSummaryCardGroup(props) {
  return (
    <Card.Group children={this.props.tables.map(table => <TableSummaryCard table={table} />)} />
  );
}

export { TableSummaryCardGroup }