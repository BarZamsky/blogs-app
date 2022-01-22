import {Blogs} from "./blogs.interface";

export const blogs: Blogs = [
    {
        id: 1,
        author: "Bar Zamsky",
        category: "Development",
        title: "Immediately Executing setInterval with JavaScript",
        imageId: "JavaScript.png",
        content: "The conventional and best way to immediately call a function at the beginning of a setInterval is to actually call the function before the initial setInterval` is called:\n" +
            "\n" +
            "myFunction();\n" +
            "setInterval(myFunction, 1000); // Every second\n" +
            "If you truly want to isolate the function call to the setInterval, you can use this trick of self-executing function that returns itself:\n" +
            "\n" +
            "// Use a named function ...\n" +
            "setInterval(function myFunction() {\n" +
            "  // Do some stuff\n" +
            "  // ...\n" +
            "\n" +
            "  // ... then return this function\n" +
            "  return myFunction;\n" +
            "\n" +
            "// () self-executes the function\n" +
            "}(), 3000)\n" +
            "The down side to this pattern is that it causes a maintenance issue, where the next developer doesn't understand what is going on.\n" +
            "\n" +
            "Maintenance is an important part of being a good engineer, so at the very least, documentation in the form of comments or a helper function should be required. If you really want to have a self-executing setInterval, you've got it!",
        summary: "Employing setInterval for condition polling has really been useful over the years. Whether polling on the client or server sides, being reactive to specific conditions helps to improve user experience. One task I recently needed to complete required that my setInterval immediately execute and then continue executing.",
        date: '01/01/2021'
    },
    {
        id: 2,
        author: "Bar Zamsky",
        category: "Development",
        title: "How to Flatten git Commits",
        imageId: "git250.png",
        summary: "One of my least favorite tasks as a software engineer is resolving merge conflicts. A simple rebase is a frequent occurrence but the rare massive conflict is inevitable when many engineers work in a single codebase. One thing that helps me deal with large rebases with many merge conflicts is flattening a branch's commits before fixing merge conflicts. Let's have a look at how to flatten those commits before resolving those conflicts!",
        content: "My typical command for rebasing off of the main branch is:\n" +
            "\n" +
            "# While on the feature branch...\n" +
            "git rebase -i master\n" +
            "To flatten commits before the rebase, which can make resolving merge conflicts easier, you can slightly modify the original command:\n" +
            "\n" +
            "# While on the feature branch...\n" +
            "# git rebase -i HEAD~[NUMBER_OF_COMMITS]\n" +
            "git rebase -i HEAD~10\n" +
            "The example above would flatten the last 10 commits on the branch. With just one single commit, you avoid the stop-start nature of fixing merge conflicts with multiple commits!",
        date: '10/03/2010'
    },
    {
        id: 3,
        author: "Bar Zamsky",
        category: "Food",
        title: "Yogurt and Fruit Parfaits you",
        imageId: "Yogurt.jpeg",
        summary:"bowl of yogurt topped with granola and fresh fruit is a morning staple, but lately I’ve been ditching the bowl and building my breakfast for on-the-go eating. In this easy recipe, creamy vanilla yogurt, ripe berries, and crunchy granola clusters are layered parfait-style in glass jars or cups, ensuring every bite is brimming with flavor, color, and texture. Here’s how to make a simple fruit and yogurt parfait.",
        content: "What’s the Best Yogurt for Parfaits?\n" +
            "I recommend starting with creamy vanilla yogurt when building these striated snacks, but the style (Greek or regular) and fat percentage are up to you. Here are a few things to keep in mind.\n" +
            "\n" +
            "Greek vs. regular. Greek yogurt is thicker than regular yogurt, which helps create clean lines between parfait layers. Since it has less moisture, Greek yogurt also won’t soften granola as quickly as regular yogurt if you’re making the jars in advance.\n" +
            "Full-fat vs. reduced fat. Whole-milk yogurts are usually more filling, so use that variety if you’re looking for a breakfast that will keep you full until lunchtime.\n" +
            "What’s the Best Granola for Parfaits?\n" +
            "Both store-bought and homemade granola work well in a yogurt parfait. Choose one that has a good mix of bigger clusters and smaller crumbles so that there are sweet and crunchy oats in every bite.\n" +
            "\n" +
            "Planning to meal prep the parfaits? Use granola with big clusters, as it will take longer for the moisture from the fruit and yogurt to seep in and soften it. Granola with dried fruit and nuts adds an extra layer of texture and flavor without adding more to your prep time, too!",
        date: '01/12/2004'
    },
    {
        id: 4,
        author: "Bar Zamsky",
        category: "Travel",
        title: "Christchurch River walkway",
        imageId: "river.jpeg",
        summary: "Five months after a magnitude 7.1 earthquake, centred near Darfield, Christchurch, an even more damaging quake struck on 22 February 2011. That shallow, 6.3 magnitude quake, just 10 kilometres from the centre of Christchurch, caused the greatest ground acceleration ever recorded in New Zealand.",
        content: "The earthquake claimed the lives of 185 people of and injured many more.\n" +
            "\n" +
            "Following the devastating earthquake as part of the city redevelopment a new waterfront has been created along the Ōtākaro/Avon River to make it easier to access river front businesses and green spaces.\n" +
            "\n" +
            "Whariki Mats welcome you to this walkway and along it’s path.\n" +
            "\n" +
            "The traditional weaving designs have been adapted using stone pavers.Each whāriki is an arrangement of natural stone pavers of varying shades and colours.\n" +
            "\n" +
            "The Canterbury Earthquake National Memorial was designed as two distinct areas either side of the gentle curve of the River.\n" +
            "\n" +
            "The memorial development was a joint project between the New Zealand Government, Christchurch City Council and Te Rūnanga o Ngāi Tahu, the administrative body of the South Island iwi, Ngāi Tahu.\n" +
            "\n" +
            "Ngāi Tahu has gifted the te reo Māori name for the memorial, Oi Manawa, which means ‘tremor or quivering of the heart\n" +
            "It also refers to the shaking of earthquake tremors and is symbolic of the trauma experienced as a result of the earthquakes.\n" +
            "\n" +
            "It was interesting to see just how much Māori influence has been incorporated throughout the city.\n" +
            "\n" +
            "Victoria Square - Queen Victoria and Captain Cook now have a Maori neighbour inspired to have a more balanced presence.\n" +
            "\n" +
            "Te Aika was designed by two Ngāi Tahu artists, is 8 metres, the shiny white sculpture forms a ceremonial entrance to Te Pae convention centre.\n" +
            "\n" +
            "As we strolled along the promenade Graham explained how the area had been developed and is still being developed, showing images of the devastation before and after.",
        date: '01/12/2004'
    }
 ]
