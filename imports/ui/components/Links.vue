<template>
    <div class="links">

        <h2>Learn Meteor!</h2>

        <div v-if="!$subReady.links">Loading...</div>

        <ul>
            <li>
                <form class="info-link-add">
                    <input type="text" v-model="input_title" placeholder="Enter title" />
                    <input type="url" v-model="input_url" placeholder="Enter link" />
                    <button type="submit" @click="addLink">Add</button>
                </form>
            </li>
            <li v-for="link in links">
                <a :href="link.url" target="_blank">{{link.title}}</a>
                <button type="button" class="btn btn-primary" @click="removeLink(link._id)">x</button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">

    import { Links } from '/imports/api/links/links.collection';

    export default {
        data() {
            return {
                input_url: null,
                input_title: null,
                links: [],
            }
        },

        meteor: {
            $subscribe: {
                'links': []
            },
            links() {
                return Links.find();
            }
        },

        methods: {
            addLink() {
                Meteor.call('links.insert', this.input_title, this.input_url, (error) => {
                    if (error) {
                        alert(error.error);
                    } else {
                        this.input_title = '';
                        this.input_url = '';
                    }
                });
            },
            removeLink(_id) {
                Meteor.call('links.remove', _id);
            }
        }
    }

</script>