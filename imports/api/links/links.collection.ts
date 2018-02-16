//import { MongoObservable} from "meteor-rxjs";
import { Mongo } from 'meteor/mongo';

import { Link } from './link.model';

export const Links = new Mongo.Collection<Link>('links');