import { Application } from 'probot';

export = (app: Application): void => {
  // For more information on building apps:
  // https://probot.github.io/docs/
  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/

  app.on(
    [
      'check_suite.requested',
      'check_suite.completed',
      'status',
      'check_run.created',
    ],
    async (context): Promise<void> => {
      context.log(context.payload);
    },
  );

  app.on(
    ['installation', 'installation_repositories'],
    async (context): Promise<void> => {
      app.log('logging this event');
      context.log(context.payload);
    },
  );
};
