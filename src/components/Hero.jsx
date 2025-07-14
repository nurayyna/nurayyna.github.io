import { Title, Button, Text, Container } from '@mantine/core';
import classes from '../style/Hero.module.css';

export default function Hero({
  backgroundImage = '/images/home_hero_section.jpg',
  title = 'Engineered Solution',
  subtitle = 'Vibration analysis and condition monitoring for industrial equipment.',
  buttonText = 'About us',
  onButtonClick = () => {},
  gradientFrom = 'indigo',
  gradientTo = 'cyan',
}) {
  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `
          linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%),
          url(${backgroundImage})`,
      }}
    >
      <div className="container">
        <div className={classes.content}>
          <Title className={classes.title}>
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: gradientFrom, to: gradientTo }}
              size="xl"
              fw={700}
            >
              {title}
            </Text>{' '}
            Provider
          </Title>

          <Text className={classes.description}>{subtitle}</Text>

          <Button
            variant="gradient"
            gradient={{ from: gradientFrom, to: gradientTo }}
            size="xl"
            className={classes.control}
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}