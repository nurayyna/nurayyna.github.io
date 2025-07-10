import { Container, Title, Button, Center, Stack, Text } from '@mantine/core';
import classes from '../style/Hero.module.css'

export default function Hero() {
  return (
    
    <div className={classes.root}>
      <div className="container">
        <div className={classes.content}>
          <Title className={classes.title}>
            An{' '}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan' }}
              size='xl'
              fw={700}
            >
              Engineered & Specialized 
            </Text>{' '}
            Services
          </Title>

          <Text className={classes.description}>
            Build fully functional accessible web applications with ease – Mantine includes more
            than 100 customizable components and hooks to cover you in any situation
          </Text>

          <Button
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan' }}
            size="xl"
            className={classes.control}
          >
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}
